import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  async getAllProducts() {
    const products = await this.productsService.getAllProducts();
    if (!products) {
      return 'No se encontraron productos en la base de datos';
    }
    return products;
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const product = await this.productsService.getProductById(+id);
    if (!product) {
      return 'No se encontró el producto con el id: ' + id;
    }
    return product;
  }
	@Post()
	async postProduct(@Body() createProductDTO: CreateProductDTO) {
		const product = await this.productsService.postProduct(createProductDTO);
		return product;
	}
}
