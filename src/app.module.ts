import { MiddlewareConsumer, Module} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DuvidasModule } from './duvidas/duvidas.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FrontendModule } from './frontend/frontend.module';
import { LogsMiddleware } from './common/filters/middleware/logs.middleware';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10,
      max: 100,
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true, // deixa disponível para toda a aplicação
    }),
    PrismaModule,
    DuvidasModule,
    AuthModule,
    FrontendModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogsMiddleware)
      .forRoutes('*');
  }
}
