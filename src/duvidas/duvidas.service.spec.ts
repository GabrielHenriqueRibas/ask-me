import { Test, TestingModule } from '@nestjs/testing';
import { DuvidasService } from './duvidas.service';

describe('DuvidasService', () => {
  let service: DuvidasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuvidasService],
    }).compile();

    service = module.get<DuvidasService>(DuvidasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
