
import { ApiBody, ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()  
  nombre: string;

  
    @ApiProperty()
    cantidad: number;
    
    @ApiProperty()
    precio: number;

    @ApiProperty()
    descripcion: string;
    
    @ApiProperty()
    imagen: string;
  }