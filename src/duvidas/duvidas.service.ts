import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DuvidasService {
  constructor(private prisma: PrismaService) {}

  create(data) {
    return this.prisma.duvida.create({ data });
  }

  findAll() {
    return this.prisma.duvida.findMany({
      include: { respostas: true },
    });
  }

  findOne(id: number) {
    return this.prisma.duvida.findUnique({
      where: { id },
      include: { respostas: true },
    });
  }

  update(id: number, data) {
    return this.prisma.duvida.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.duvida.delete({ where: { id } });
  }
}
