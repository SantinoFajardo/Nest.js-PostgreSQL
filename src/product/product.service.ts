import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeEntity } from 'src/type/models/type.model';
import { Repository } from 'typeorm';
import { CreateProduct, updateProduct } from './dto/product.dto';
import { PRODUCT } from './interfaces/product.interface';
import { ProductEntity } from './models/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(body: any): Promise<PRODUCT | string> {
    if (!body.name || !body.price || !body.stock) {
      return ' Missing data';
    }
    return await this.productRepository.save(body);
  }

  async findProducts(): Promise<PRODUCT[]> {
    return await this.productRepository.find();
  }

  async findProduct(name: string): Promise<PRODUCT> {
    return await this.productRepository.findOneBy({ name });
  }

  async updateProduct(id: number, body: updateProduct): Promise<string> {
    await this.productRepository.update(id, body);
    return 'Product Updated';
  }

  async deleteProduct(id: number): Promise<string> {
    await this.productRepository.delete(id);
    return 'Product Deleted';
  }
}
