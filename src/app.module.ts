import { Module} from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DuvidasModule } from './duvidas/duvidas.module';
import { RespostasModule } from './respostas/respostas.module';
import { PrismaModule } from './prisma/prisma.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views'), 
    }),
    CacheModule.register({ ttl: 60 }), // cache 60s
    PrismaModule,
    AuthModule,
    DuvidasModule,
    RespostasModule,
  ],
})
export class AppModule {}
