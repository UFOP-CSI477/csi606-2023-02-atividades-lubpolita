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

  public async execute(id: string): Promise<Cidades | undefined> {
    const cidades = await this.cidadesRepository.findById(id);
    return cidades;
  }
}
