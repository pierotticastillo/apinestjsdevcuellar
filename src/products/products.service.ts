import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './entities/products.entity';
import { Repository } from 'typeorm';
import { ProductsDTO } from './dto/products.dto';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productRepository: Repository<Products>,
  ) {}
  async getAllProducts(): Promise<ProductsDTO[]> {
    const products = await this.productRepository.find();
    if (!products) {
      return null;
    }
    return products;
  }

  async getProductById(id: number): Promise<ProductsDTO | null> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      return null;
    }
    return product;
  }
  async postProduct(createProductDTO: CreateProductDTO): Promise<ProductsDTO>{
    const newProduct = this.productRepository.create(createProductDTO);
    const product = await this.productRepository.save(newProduct);
    return product;
  }
}
