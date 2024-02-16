/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IEstadosRepository } from '../../shared/typeorm/repositories/Estados/IEstadosRepository';

interface IRequest {
  id: string;
  nome?: string;
  sigla?: string;
  create_at?: string;
  update_at?: string;
}

@injectable()
export default class UpdateEstadosService {
  constructor(
    @inject('EstadosRepository')
    private readonly estadosRepository: IEstadosRepository,
  ) {}

  public async execute({
    id,
    nome,
    sigla,
    create_at,
    update_at,
  }: IRequest): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const estado = await this.estadosRepository.findById(id);
    if (!estado) {
      throw new Error('Id not found');
    }

    if (nome) {
      estado.nome = nome;
    }

    if (sigla) {
      estado.sigla = sigla;
    }

    if (create_at) {
      estado.create_at = create_at;
    }

    if (update_at) {
      estado.update_at = update_at;
    }

    await this.estadosRepository.update(estado);
  }
}
