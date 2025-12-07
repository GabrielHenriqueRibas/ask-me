import { Controller, Get, Post, Body, Param, Patch, Delete, UseInterceptors } from '@nestjs/common';
import { DuvidasService } from './duvidas.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { UpdateDuvidaDto } from './dto/update-duvida.dto';
import { ApiTags } from '@nestjs/swagger';
import { CacheInterceptor } from '@nestjs/cache-manager';

@ApiTags('Dúvidas')
@Controller('duvidas')
export class DuvidasController {
  constructor(private service: DuvidasService) {}

  @Post()
  create(@Body() dto: CreateDuvidaDto) {
    return this.service.create(dto);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll() {
    console.log("Buscando do banco...");
    return this.service.findAll();
  }

  @UseInterceptors(CacheInterceptor)
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
