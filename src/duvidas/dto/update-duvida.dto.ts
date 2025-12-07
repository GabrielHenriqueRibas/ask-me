import { IsOptional, IsString } from 'class-validator';

export class UpdateDuvidaDto {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
