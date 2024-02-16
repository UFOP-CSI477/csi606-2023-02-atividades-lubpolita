/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Doacoes } from '../../shared/typeorm/entities/Doacoes';
import { IDoacoesRepository } from '../../shared/typeorm/repositories/Doacoes/IDoacoesRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('DoacoesRepository')
    private readonly cidadesRepository: IDoacoesRepository,
  ) {}

  public async execute(id: string): Promise<Doacoes | undefined> {
    const cidades = await this.cidadesRepository.findById(id);
    return cidades;
  }
}
