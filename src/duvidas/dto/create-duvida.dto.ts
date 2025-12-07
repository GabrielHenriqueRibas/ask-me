import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateDuvidaDto {
  
  @ApiProperty({ example: "Erro ao conectar no banco", description: "Título da dúvida" })
  @IsString()
  titulo: string;

  @ApiProperty({ example: "Minha aplicação não conecta no PostgreSQL...", description: "Descrição detalhada" })
  @IsString()
  descricao: string;
}
