import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

//providers
@Injectable()
export class RespostasService {
  constructor(private prisma: PrismaService) {}

  create(data) {
  return this.prisma.resposta.create({
    data: {
      duvidaId: data.duvidaId,
      texto: data.texto
    },
  });
}

}
