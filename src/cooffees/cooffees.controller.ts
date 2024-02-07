import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CooffeesService } from './cooffees.service';
import { CreateCooffeeDto } from './dto/create-cooffee.dto';
import { UpdateCooffeeDto } from './dto/update-cooffee.dto';

@Controller('cooffees')
export class CooffeesController {
  constructor(private readonly cooffeesService: CooffeesService) {}

  @Post()
  create(@Body() createCooffeeDto: CreateCooffeeDto) {
    return this.cooffeesService.create(createCooffeeDto);
  }

  @Get()
  findAll() {
    return this.cooffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cooffeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCooffeeDto: UpdateCooffeeDto) {
    return this.cooffeesService.update(+id, updateCooffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cooffeesService.remove(+id);
  }
}
