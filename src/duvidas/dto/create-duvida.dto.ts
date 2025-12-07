import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDuvidaDto {
  @ApiProperty({
    example: 'Gabriel Ribas',
    description: 'Nome de quem está enviando a dúvida',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'Erro ao conectar no banco',
    description: 'Título curto e descritivo da dúvida',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  titulo: string;

  @ApiProperty({
    example: 'Estou recebendo um erro ao tentar conectar com o PostgreSQL...',
    description: 'Descrição completa da dúvida',
    minLength: 10,
  })
  @IsString()
  @MinLength(10)
  descricao: string;
}
