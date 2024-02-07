import { Module } from '@nestjs/common';
import { CooffeesService } from './cooffees.service';
import { CooffeesController } from './cooffees.controller';

@Module({
  controllers: [CooffeesController],
  providers: [CooffeesService],
})
export class CooffeesModule {}
