/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { TiposSanguineos } from '../../shared/typeorm/entities/TiposSanguineos';
import { ITiposSanguineosRepository } from '../../shared/typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';

@injectable()
export default class FindAllTiposSanguineosService {
  constructor(
    @inject('TiposSanguineosRepository')
    private readonly pessoasRepository: ITiposSanguineosRepository,
  ) {}

  public async execute(): Promise<TiposSanguineos[] | undefined> {
    const pessoasArray = await this.pessoasRepository.findAll();
    return pessoasArray;
  }
}
