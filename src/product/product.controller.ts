import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Delete,
  Res,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateProduct, updateProduct } from './dto/product.dto';
import { PRODUCT } from './interfaces/product.interface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private ProductService: ProductService) {}

  @Post()
  async createProduct(
    @Body() body: CreateProduct,
    @Res() res: Response,
  ): Promise<PRODUCT | Response> {
    const response = await this.ProductService.createProduct(body);
    if (!body.name || !body.price || !body.stock) {
      return res.status(HttpStatus.BAD_REQUEST).send(response);
    }
    return res.status(HttpStatus.OK).json(response);
  }

  @Get()
  async findProducts(@Res() res: Response): Promise<PRODUCT[] | Response> {
    const response: PRODUCT[] = await this.ProductService.findProducts();
    if (!response.length) {
      return res.status(HttpStatus.NO_CONTENT).send('Not exist any product');
    }
    return res.status(HttpStatus.OK).json(response);
  }

  @Get(':name')
  async getProduct(
    @Param('name') name: string,
    @Res() res: Response,
  ): Promise<PRODUCT | Response> {
    const response: PRODUCT = await this.ProductService.findProduct(name);
    if (!response) {
      return res.status(HttpStatus.NO_CONTENT).send('Not exist this product');
    }
    return res.status(HttpStatus.OK).json(response);
  }

  @Put(':id')
  async updateProduct(
    @Res() res: Response,
    @Body() body: updateProduct,
    @Param('id') id: number,
  ) {
    const response = await this.ProductService.updateProduct(id, body);
    return res.status(HttpStatus.OK).json(response);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: number, @Res() res: Response) {
    const response = await this.ProductService.deleteProduct(id);
    return res.status(HttpStatus.OK).json(response);
  }
}
