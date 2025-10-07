import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    // Kategoriya nomi mavjudligini tekshirish
    const existingCategory = await this.categoriesRepository.findOne({
      where: { name: createCategoryDto.name }
    });

    if (existingCategory) {
      throw new ConflictException('Bu kategoriya nomi allaqachon mavjud');
    }

    const category = this.categoriesRepository.create(createCategoryDto);
    return this.categoriesRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find({
      where: { isActive: true },
      relations: ['products'],
    });
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoriesRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!category) {
      throw new NotFoundException('Kategoriya topilmadi');
    }

    return category;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    await this.findOne(id);
    
    // Agar nom o'zgartirilayotgan bo'lsa, mavjudligini tekshirish
    if (updateCategoryDto.name) {
      const existingCategory = await this.categoriesRepository.findOne({
        where: { name: updateCategoryDto.name }
      });

      if (existingCategory && existingCategory.id !== id) {
        throw new ConflictException('Bu kategoriya nomi allaqachon mavjud');
      }
    }

    await this.categoriesRepository.update(id, updateCategoryDto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    const category = await this.findOne(id);
    
    // Agar kategoriyada mahsulotlar bo'lsa, o'chirishga ruxsat bermaslik
    if (category.products && category.products.length > 0) {
      throw new ConflictException('Bu kategoriyada mahsulotlar mavjud, avval ularni boshqa kategoriyaga ko\'chiring');
    }

    await this.categoriesRepository.remove(category);
  }
}
