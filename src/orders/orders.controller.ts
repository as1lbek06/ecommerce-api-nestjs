import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-order.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@ApiTags('orders')
@ApiBearerAuth()
@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiOperation({ summary: 'Yangi buyurtma berish' })
  create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    return this.ordersService.create(createOrderDto, req.user.id);
  }

  @Get()
  @ApiOperation({ summary: 'Foydalanuvchi buyurtmalarini olish' })
  findUserOrders(@Request() req) {
    return this.ordersService.getUserOrders(req.user.id);
  }

  @Get('all')
  @ApiOperation({ summary: 'Barcha buyurtmalarni olish (Admin)' })
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buyurtmani ID bo\'yicha olish' })
  findOne(@Param('id') id: string, @Request() req) {
    // Admin barcha buyurtmalarni ko'ra oladi, oddiy user faqat o'zinikilarni
    const userId = req.user.role === UserRole.ADMIN ? undefined : req.user.id;
    return this.ordersService.findOne(id, userId);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Buyurtma holatini yangilash (Admin)' })
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  updateStatus(
    @Param('id') id: string,
    @Body() updateOrderStatusDto: UpdateOrderStatusDto,
  ) {
    return this.ordersService.updateStatus(id, updateOrderStatusDto);
  }
}
