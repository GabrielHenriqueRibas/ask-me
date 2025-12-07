import { Module } from '@nestjs/common';
import { DuvidasController } from './duvidas.controller';
import { DuvidasService } from './duvidas.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DuvidasController],
  providers: [DuvidasService],
})
export class DuvidasModule {}
