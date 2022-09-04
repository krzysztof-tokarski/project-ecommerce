import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CreateProductDto } from '@project-ecommerce/product-models';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  private createProduct(@Body() newProductData: CreateProductDto) {
    this.productsService.create(newProductData);
  }
}
