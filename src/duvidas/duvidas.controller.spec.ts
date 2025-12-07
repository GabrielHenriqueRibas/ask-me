import { Test, TestingModule } from '@nestjs/testing';
import { DuvidasController } from './duvidas.controller';

describe('DuvidasController', () => {
  let controller: DuvidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuvidasController],
    }).compile();

    controller = module.get<DuvidasController>(DuvidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
