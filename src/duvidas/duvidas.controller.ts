import { Controller, Post, Get, Param, Body, ParseIntPipe } from '@nestjs/common';
import { DuvidasService } from './duvidas.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';

@Controller('duvidas')
export class DuvidasController {
  constructor(private readonly service: DuvidasService) {}

  @Post()
  criar(@Body() data: CreateDuvidaDto) {
    return this.service.criar(data);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) { // ParseIntPipe converte o parametro id de string para number
    return this.service.buscarPorId(id);
  }
}
