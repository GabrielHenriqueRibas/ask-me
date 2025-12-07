import { IsInt, IsString } from 'class-validator';

export class CreateRespostaDto {
  @IsInt()
  duvidaId: number;

  @IsString()
  resposta: string;
}
