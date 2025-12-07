import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';

@Injectable()
export class DuvidasService {
  constructor(private prisma: PrismaService) {}

  listar() {
    return this.prisma.duvida.findMany();
  }

  criar(data: CreateDuvidaDto) {
    return this.prisma.duvida.create({
      data,
    });
  }

  buscarPorId(id: number) {
    return this.prisma.duvida.findUnique({
      where: { id },
    });
  }
}
