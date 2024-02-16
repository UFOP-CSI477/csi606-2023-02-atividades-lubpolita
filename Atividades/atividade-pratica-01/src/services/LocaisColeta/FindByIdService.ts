/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { LocaisColeta } from '../../shared/typeorm/entities/LocaisColeta';
import { ILocaisColetaRepository } from '../../shared/typeorm/repositories/LocaisColeta/ILocaisColetaRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('LocaisColetaRepository')
    private readonly cidadesRepository: ILocaisColetaRepository,
  ) {}

  public async execute(id: string): Promise<LocaisColeta | undefined> {
    const cidades = await this.cidadesRepository.findById(id);
    return cidades;
  }
}
