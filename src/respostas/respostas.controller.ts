import { Controller, Post, Body } from '@nestjs/common';
import { RespostasService } from './respostas.service';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Respostas')
@Controller('respostas')
export class RespostasController {
  constructor(private service: RespostasService) {}

  @Post()
  create(@Body() dto: CreateRespostaDto) {
    return this.service.create(dto);
  }
}
