
import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './entities/company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private empresaRepository: Repository<Company>,
  ) {}

  async listarCompany(): Promise<Company[]> {
    return this.empresaRepository.find();
  }

  async createEmpresa(empresaDTO: CreateCompanyDto): Promise<CreateCompanyDto> {
    const empresa = this.empresaRepository.create(empresaDTO);
    return this.empresaRepository.save(empresa);
  }
}

