/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Cidades } from '../../shared/typeorm/entities/Cidades';
import { ICidadesRepository } from '../../shared/typeorm/repositories/Cidades/ICidadesRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('CidadesRepository')
    private readonly cidadesRepository: ICidadesRepository,
  ) {}

  public async execute(name: string): Promise<Cidades[] | undefined> {
    const cidades = await this.cidadesRepository.findByName(name);
    return cidades;
  }
}
