import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@Controller('warehouse')
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  
  @Get()
  findAll() {
    return this.warehouseService.getAllWarehouse();
  }

  @Post()
  createUser(@Body('name') name: CreateWarehouseDto): Promise<CreateWarehouseDto> {
    return this.warehouseService.createWarehouse(name);
  }
}
