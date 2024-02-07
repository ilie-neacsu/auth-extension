import { Injectable } from '@nestjs/common';
import { CreateCooffeeDto } from './dto/create-cooffee.dto';
import { UpdateCooffeeDto } from './dto/update-cooffee.dto';

@Injectable()
export class CooffeesService {
  create(createCooffeeDto: CreateCooffeeDto) {
    return 'This action adds a new cooffee';
  }

  findAll() {
    return `This action returns all cooffees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cooffee`;
  }

  update(id: number, updateCooffeeDto: UpdateCooffeeDto) {
    return `This action updates a #${id} cooffee`;
  }

  remove(id: number) {
    return `This action removes a #${id} cooffee`;
  }
}
