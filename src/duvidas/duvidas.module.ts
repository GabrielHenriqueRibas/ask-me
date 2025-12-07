import { Module } from '@nestjs/common';
import { DuvidasService } from './duvidas.service';
import { DuvidasController } from './duvidas.controller';

@Module({
  controllers: [DuvidasController],
  providers: [DuvidasService],
})
export class DuvidasModule {}
