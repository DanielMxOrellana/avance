import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateListaDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  isAlive?: boolean;

  constructor(name: string, isAlive?: boolean) {
    this.name = name;
    this.isAlive = isAlive; // Asignar valor en el constructor
  }
}
