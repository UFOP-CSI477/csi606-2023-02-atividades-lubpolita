/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { LocaisColeta } from '../../shared/typeorm/entities/LocaisColeta';
import { ILocaisColetaRepository } from '../../shared/typeorm/repositories/LocaisColeta/ILocaisColetaRepository';

@injectable()
export default class FindAllLocaisColetaService {
  constructor(
    @inject('LocaisColetaRepository')
    private readonly cidadesRepository: ILocaisColetaRepository,
  ) {}

  public async execute(): Promise<LocaisColeta[] | undefined> {
    const cidadesArray = await this.cidadesRepository.findAll();
    return cidadesArray;
  }
}
