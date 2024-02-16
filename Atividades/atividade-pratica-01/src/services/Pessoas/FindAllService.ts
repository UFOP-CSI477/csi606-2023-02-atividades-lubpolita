/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Pessoas } from '../../shared/typeorm/entities/Pessoas';
import { IPessoasRepository } from '../../shared/typeorm/repositories/Pessoas/IPessoasRepository';

@injectable()
export default class FindAllPessoasService {
  constructor(
    @inject('PessoasRepository')
    private readonly pessoasRepository: IPessoasRepository,
  ) {}

  public async execute(): Promise<Pessoas[] | undefined> {
    const pessoasArray = await this.pessoasRepository.findAll();
    return pessoasArray;
  }
}
