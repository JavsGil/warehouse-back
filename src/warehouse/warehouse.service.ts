import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Warehouse } from './entities/warehouse.entity';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@Injectable()
export class WarehouseService {
  empresaRepository: any;
  productoRepository: any;
  constructor(
    @InjectRepository(Warehouse)
    private warehouseRepository: Repository<Warehouse>,
  ) {}

  async getAllWarehouse(): Promise<Warehouse[]> {
    // const warehouses: Warehouse[] = await this.warehouseRepository
    //   .createQueryBuilder('inventario')
    //   .leftJoinAndSelect('warehouse.product', 'product')
    //   .leftJoinAndSelect('warehouse.company', 'company')
    //   .select(['warehouse.id', 'warehouse.nit_empresa', 'warehouse.id_product', 'product.name', 'company.nit'])
    //   .getMany();

      
    // return warehouses.map(warehouse => this.mapWarehouseToDto(warehouse));

   return await this.warehouseRepository.find();
  }

  async createWarehouse(createWarehouseDto: CreateWarehouseDto): Promise<CreateWarehouseDto> {
    const { nit_empresa, id_product } = createWarehouseDto;
  
    // Obtener las entidades de empresa y producto utilizando los ids
    const empresa = await this.empresaRepository.findOne(nit_empresa);
    const producto = await this.productoRepository.findOne(id_product);
  
    // Crear una nueva instancia de Warehouse y asignar las relaciones
    const newWarehouse = new Warehouse();
    newWarehouse.nit_empresa = nit_empresa;
    newWarehouse.id_product = id_product;
    newWarehouse.company = empresa;
    newWarehouse.product = producto;
  
    // Guardar el almacén
    const savedWarehouse = await this.warehouseRepository.save(newWarehouse);
  
    return this.mapWarehouseToDto(savedWarehouse);
    
  }

  private mapWarehouseToDto(warehouse: Warehouse): CreateWarehouseDto {
    const { nit_empresa, id_product, product, company } = warehouse;
    return {
      nit_empresa,
      id_product,
      productName: product.name,
      companyName: company.nombre,
    };
  }
}
