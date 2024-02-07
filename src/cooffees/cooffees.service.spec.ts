import { Test, TestingModule } from '@nestjs/testing';
import { CooffeesService } from './cooffees.service';

describe('CooffeesService', () => {
  let service: CooffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CooffeesService],
    }).compile();

    service = module.get<CooffeesService>(CooffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
