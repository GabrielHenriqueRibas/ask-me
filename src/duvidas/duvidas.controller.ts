import { Controller, Post, Get, Param, Body, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { DuvidasService } from './duvidas.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';


@Controller('duvidas')
export class DuvidasController {
  constructor(private readonly service: DuvidasService) {}

  @Post()
  criar(@Body() data: CreateDuvidaDto) {
    return this.service.criar(data);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) { // ParseIntPipe converte o parametro id de string para number
    return this.service.buscarPorId(id);
  }
}
