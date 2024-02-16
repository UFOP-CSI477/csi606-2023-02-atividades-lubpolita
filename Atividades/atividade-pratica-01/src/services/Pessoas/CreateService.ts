/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreatePessoasDTO } from '../../dtos/CreatePessoasDTO';
import { Pessoas } from '../../shared/typeorm/entities/Pessoas';
import { IPessoasRepository } from '../../shared/typeorm/repositories/Pessoas/IPessoasRepository';

@injectable()
export default class CreatePessoasService {
  constructor(
    @inject('PessoasRepository')
    private readonly pessoasRepository: IPessoasRepository,
  ) {}

  public async execute(data: ICreatePessoasDTO): Promise<Pessoas> {
    const pessoas = await this.pessoasRepository.create(data);
    return pessoas;
  }
}
