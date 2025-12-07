import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DuvidasModule } from './duvidas/duvidas.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, DuvidasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
