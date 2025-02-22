import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  BadRequestException,
  HttpException,
  HttpStatus,
  NotFoundException,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getAllProducts() {
    const products = await this.productsService.getAllProducts();
    if (!products || products.length === 0) {
      throw new NotFoundException(
        'No se encontraron productos en la base de datos.',
      );
    }
    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productsService.getProductById(+id);
    if (!product) {
      throw new NotFoundException(
        `No se encontró el producto con el id: ${id}`,
      );
    }
    return product;
  }
  @Post()
  async postProduct(@Body() createProductDTO: CreateProductDTO) {
    try {
      const product = await this.productsService.postProduct(createProductDTO);
      if (!product) {
        throw new BadRequestException('El producto no pudo ser creado.');
      }
      return product;
    } catch (error) {
      throw new HttpException(
        { message: 'Error al crear el producto', error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Patch(':id')
  async patchProduct(
    @Body() updateProductDTO: UpdateProductDto,
    @Param('id') id: string,
  ) {
    try {
      const product = await this.productsService.patchProduct(
        updateProductDTO,
        +id,
      );
      if (!product) {
        throw new BadRequestException('El producto no pudo ser actualizado.');
      }
      return product;
    } catch (error) {
      throw new HttpException(
        { message: 'Error al actualizar el producto', error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      const product = await this.productsService.deleteProduct(+id);
      if (!product) {
        throw new BadRequestException('El producto no pudo ser eliminado.');
      }
      return product;
    } catch (error) {
      throw new HttpException(
        { message: 'Error al eliminar el producto', error: error.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
