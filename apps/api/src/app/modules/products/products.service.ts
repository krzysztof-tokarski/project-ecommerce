import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto, Product } from '@project-ecommerce/product-models';
import { Model } from 'mongoose';

type ProductProperty = keyof Product;

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private ProductModel: Model<Product>) {}

  public async create(newProductData: CreateProductDto): Promise<Product> {
    const newProduct = new this.ProductModel(newProductData);
    return newProduct.save();
  }

  public async findOne(email: string, projectionProperties?: ProductProperty[]) {
    return (await this.ProductModel.findOne({ email }, projectionProperties?.join(' ')).exec()).toJSON();
  }
}
