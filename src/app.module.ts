import { MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DuvidasModule } from './duvidas/duvidas.module';
import { RespostasModule } from './respostas/respostas.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LogsMiddleware } from './common/filters/middleware/logs.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views'), 
    }),
    CacheModule.register({ 
      isGlobal: true,
      ttl: 60 
    }),
    PrismaModule,
    AuthModule,
    DuvidasModule,
    RespostasModule,
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogsMiddleware)
      .forRoutes('*'); 
  }
}
