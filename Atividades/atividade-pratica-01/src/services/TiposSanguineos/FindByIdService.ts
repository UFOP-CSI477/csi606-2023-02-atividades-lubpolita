/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { TiposSanguineos } from '../../shared/typeorm/entities/TiposSanguineos';
import { ITiposSanguineosRepository } from '../../shared/typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('TiposSanguineosRepository')
    private readonly pessoasRepository: ITiposSanguineosRepository,
  ) {}

  public async execute(id: string): Promise<TiposSanguineos | undefined> {
    const pessoas = await this.pessoasRepository.findById(id);
    return pessoas;
  }
}
