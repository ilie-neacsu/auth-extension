import { PartialType } from '@nestjs/mapped-types';
import { CreateCooffeeDto } from './create-cooffee.dto';

export class UpdateCooffeeDto extends PartialType(CreateCooffeeDto) {}
