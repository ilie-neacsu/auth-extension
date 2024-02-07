import { Test, TestingModule } from '@nestjs/testing';
import { CooffeesController } from './cooffees.controller';
import { CooffeesService } from './cooffees.service';

describe('CooffeesController', () => {
  let controller: CooffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CooffeesController],
      providers: [CooffeesService],
    }).compile();

    controller = module.get<CooffeesController>(CooffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
