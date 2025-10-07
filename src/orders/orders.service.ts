import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order, OrderStatus } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderItem)
    private orderItemsRepository: Repository<OrderItem>,
    private productsService: ProductsService,
  ) {}

  async create(createOrderDto: CreateOrderDto, userId: string): Promise<Order> {
    let totalAmount = 0;
    const orderItems: OrderItem[] = [];

    // Har bir mahsulot uchun tekshirish va hisoblash
    for (const item of createOrderDto.items) {
      const product = await this.productsService.findOne(item.productId);
      
      if (product.stock < item.quantity) {
        throw new BadRequestException(`Mahsulot "${product.name}" uchun yetarli miqdor mavjud emas`);
      }

      const orderItem = this.orderItemsRepository.create({
        productId: item.productId,
        quantity: item.quantity,
        price: product.price,
      });

      orderItems.push(orderItem);
      totalAmount += product.price * item.quantity;
    }

    // Buyurtma yaratish
    const order = this.ordersRepository.create({
      userId,
      totalAmount,
      shippingAddress: createOrderDto.shippingAddress,
      notes: createOrderDto.notes,
      items: orderItems,
    });

    const savedOrder = await this.ordersRepository.save(order);

    // Mahsulot stockini yangilash
    for (const item of createOrderDto.items) {
      await this.productsService.updateStock(item.productId, item.quantity);
    }

    return this.findOne(savedOrder.id, userId);
  }

  async findAll(userId?: string): Promise<Order[]> {
    const where = userId ? { userId } : {};
    
    return this.ordersRepository.find({
      where,
      relations: ['items', 'items.product', 'user'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string, userId?: string): Promise<Order> {
    const where = userId ? { id, userId } : { id };
    
    const order = await this.ordersRepository.findOne({
      where,
      relations: ['items', 'items.product', 'user'],
    });

    if (!order) {
      throw new NotFoundException('Buyurtma topilmadi');
    }

    return order;
  }

  async updateStatus(id: string, updateOrderStatusDto: UpdateOrderStatusDto): Promise<Order> {
    const order = await this.findOne(id);
    
    await this.ordersRepository.update(id, { 
      status: updateOrderStatusDto.status 
    });
    
    return this.findOne(id);
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    return this.findAll(userId);
  }
}
