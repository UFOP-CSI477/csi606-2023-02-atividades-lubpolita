/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Pessoas } from '../../shared/typeorm/entities/Pessoas';
import { IPessoasRepository } from '../../shared/typeorm/repositories/Pessoas/IPessoasRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('PessoasRepository')
    private readonly pessoasRepository: IPessoasRepository,
  ) {}

  public async execute(id: string): Promise<Pessoas | undefined> {
    const pessoas = await this.pessoasRepository.findById(id);
    return pessoas;
  }
}
