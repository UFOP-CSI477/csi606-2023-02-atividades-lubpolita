/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateLocaisColetaDTO } from '../../dtos/CreateLocaisColetaDTO';
import { LocaisColeta } from '../../shared/typeorm/entities/LocaisColeta';
import { ILocaisColetaRepository } from '../../shared/typeorm/repositories/LocaisColeta/ILocaisColetaRepository';

@injectable()
export default class CreateLocaisColetaService {
  constructor(
    @inject('LocaisColetaRepository')
    private readonly cidadesRepository: ILocaisColetaRepository,
  ) {}

  public async execute(data: ICreateLocaisColetaDTO): Promise<LocaisColeta> {
    const cidades = await this.cidadesRepository.create(data);
    return cidades;
  }
}
