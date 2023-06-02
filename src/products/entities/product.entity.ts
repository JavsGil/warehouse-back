import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  cantidad: number;

  @Column()
  precio: number;

  @Column()
  descripcion: string;

  @Column()
  imagen: string;

  warehouses: any;
  name: any;
}