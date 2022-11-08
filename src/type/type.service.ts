import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateType } from './dto/type.sto';
import { TypeEntity } from './models/type.model';

export class TypeService {
  constructor(
    @InjectRepository(TypeEntity)
    private typeRepository: Repository<TypeEntity>,
  ) {}

  async createType(body: CreateType) {
    return await this.typeRepository.save(body);
  }

  async getTypes() {
    return await this.typeRepository.find();
  }
}
