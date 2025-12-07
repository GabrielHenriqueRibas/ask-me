import { IsString } from 'class-validator';

export class CreateDuvidaDto {
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;
}
