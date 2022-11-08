import { Controller, Post, Get, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateType } from './dto/type.sto';
import { TYPE } from './interfaces/type.interfaces';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @Post()
  async createType(
    @Body() body: CreateType,
    @Res() res: Response,
  ): Promise<TYPE | Response> {
    if (!body.title) return res.status(HttpStatus.OK).send('Missing name');
    const response = await this.typeService.createType(body);
    return res.status(HttpStatus.OK).json(response);
  }

  @Get()
  async getTypes(@Res() res: Response) {
    const response = await this.typeService.getTypes();
    return res.status(HttpStatus.OK).json(response);
  }
}
