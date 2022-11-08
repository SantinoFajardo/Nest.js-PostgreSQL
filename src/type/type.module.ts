import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './models/type.model';
import { ProductEntity } from 'src/product/models/product.model';

@Module({
  imports: [TypeOrmModule.forFeature([TypeEntity])],
  controllers: [TypeController],
  providers: [TypeService],
})
export class TypeModule {}
