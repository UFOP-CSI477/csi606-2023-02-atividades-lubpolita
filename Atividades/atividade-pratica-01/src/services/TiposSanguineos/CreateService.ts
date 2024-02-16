/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateTiposSanguineosDTO } from '../../dtos/CreateTiposSanguineosDTO';
import { TiposSanguineos } from '../../shared/typeorm/entities/TiposSanguineos';
import { ITiposSanguineosRepository } from '../../shared/typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';

@injectable()
export default class CreateTiposSanguineosService {
  constructor(
    @inject('TiposSanguineosRepository')
    private readonly pessoasRepository: ITiposSanguineosRepository,
  ) {}

  public async execute(
    data: ICreateTiposSanguineosDTO,
  ): Promise<TiposSanguineos> {
    const pessoas = await this.pessoasRepository.create(data);
    return pessoas;
  }
}
