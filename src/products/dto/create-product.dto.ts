import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  isNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty({message: 'El código es obligatorio'})
  @IsString({message: 'El código debe ser un string'})
  code: string;

  @IsNotEmpty({message: 'La descripción es obligatoria'})
  @IsString({message: 'La descripción debe ser un string'})
  description: string;

  @IsNotEmpty({ message: 'El precio es obligatorio.' })
  @IsNumber({}, { message: 'El precio debe ser un número.' })
  @IsPositive({ message: 'El precio debe ser mayor que cero.' })
  @Type(() => Number) // ✅ Transforma el valor a número automáticamente
  price: number;
}
