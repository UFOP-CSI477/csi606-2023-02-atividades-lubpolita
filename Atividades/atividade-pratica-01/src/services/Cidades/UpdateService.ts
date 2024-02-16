/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICidadesRepository } from '../../shared/typeorm/repositories/Cidades/ICidadesRepository';

@injectable()
export default class UpdateCidadesService {
  constructor(
    @inject('CidadesRepository')
    private readonly cidadesRepository: ICidadesRepository,
  ) {}

  public async execute({
    id,
    nome,
    estado_id,
    create_at,
    update_at,
  }): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const cidades = await this.cidadesRepository.findById(id);
    if (!cidades) {
      throw new Error('Id not found');
    }

    if (nome) {
      cidades.nome = nome;
    }

    if (estado_id) {
      cidades.estado_id = estado_id;
    }

    if (create_at) {
      cidades.create_at = create_at;
    }

    if (update_at) {
      cidades.update_at = update_at;
    }

    await this.cidadesRepository.update(cidades);
  }
}
