
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
 
  nit: number;
  
  @Column()
  nombre: string;
  
  @Column()
  direccion: string;
  
  @Column()
  telefono: string;
  
  @Column()
  ciudad: string;
  

  warehouses: any;

}
