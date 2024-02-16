/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Cidades } from '../../shared/typeorm/entities/Cidades';
import { ICidadesRepository } from '../../shared/typeorm/repositories/Cidades/ICidadesRepository';

@injectable()
export default class FindAllCidadesService {
  constructor(
    @inject('CidadesRepository')
    private readonly cidadesRepository: ICidadesRepository,
  ) {}

  public async execute(): Promise<Cidades[] | undefined> {
    const cidadesArray = await this.cidadesRepository.findAll();
    return cidadesArray;
  }
}
