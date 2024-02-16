/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ITiposSanguineosRepository } from '../../shared/typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';

interface IRequest {
  id: string;
  tipo?: string;
  fator?: string;
  create_at?: string;
  update_at?: string;
}

@injectable()
export default class UpdateTiposSanguineosService {
  constructor(
    @inject('TiposSanguineosRepository')
    private readonly tiposSanguineosRepository: ITiposSanguineosRepository,
  ) {}

  public async execute({
    id,
    tipo,
    fator,
    create_at,
    update_at,
  }: IRequest): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const tipoSanguineo = await this.tiposSanguineosRepository.findById(id);
    if (!tipoSanguineo) {
      throw new Error('Id not found');
    }

    if (tipo) {
      tipoSanguineo.tipo = tipo;
    }

    if (fator) {
      tipoSanguineo.fator = fator;
    }

    if (create_at) {
      tipoSanguineo.create_at = create_at;
    }

    if (update_at) {
      tipoSanguineo.update_at = update_at;
    }

    await this.tiposSanguineosRepository.update(tipoSanguineo);
  }
}
