import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from '../../companies/entities/company.entity';
import { Product } from '../../products/entities/product.entity';

@Entity('warehouse')
export class Warehouse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nit_empresa: number;

  @Column()
  id_product: number;

  @ManyToOne(() => Company, empresa => empresa.warehouses)
  company: Company;

  @ManyToOne(() => Product, product => product.warehouses)
  product: Product;
}
