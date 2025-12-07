import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DuvidasService } from './duvidas.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { UpdateDuvidaDto } from './dto/update-duvida.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Dúvidas')
@Controller('duvidas')
export class DuvidasController {
  constructor(private service: DuvidasService) {}

  @Post()
  create(@Body() dto: CreateDuvidaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDuvidaDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
