/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Doacoes } from '../../shared/typeorm/entities/Doacoes';
import { IDoacoesRepository } from '../../shared/typeorm/repositories/Doacoes/IDoacoesRepository';

@injectable()
export default class FindAllDoacoesService {
  constructor(
    @inject('DoacoesRepository')
    private readonly cidadesRepository: IDoacoesRepository,
  ) {}

  public async execute(): Promise<Doacoes[] | undefined> {
    const cidadesArray = await this.cidadesRepository.findAll();
    return cidadesArray;
  }
}
