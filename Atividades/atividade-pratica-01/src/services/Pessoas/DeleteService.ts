/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IPessoasRepository } from '../../shared/typeorm/repositories/Pessoas/IPessoasRepository';

@injectable()
export default class DeletePessoasService {
  constructor(
    @inject('PessoasRepository')
    private readonly pessoasRepository: IPessoasRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const pessoasExists = await this.pessoasRepository.findById(id);
    if (!pessoasExists) {
      throw new Error('Invalid pessoas id');
    }

    await this.pessoasRepository.delete(id);
  }
}
