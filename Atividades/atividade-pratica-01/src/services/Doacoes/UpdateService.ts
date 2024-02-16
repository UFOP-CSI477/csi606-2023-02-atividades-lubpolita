/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IDoacoesRepository } from '../../shared/typeorm/repositories/Doacoes/IDoacoesRepository';

interface IRequest {
  id: string;
  pessoa_id?: string;
  local_id?: string;
  data?: string;
  create_at?: string;
  update_at?: string;
}

@injectable()
export default class UpdateDoacoesService {
  constructor(
    @inject('DoacoesRepository')
    private readonly doacoesRepository: IDoacoesRepository,
  ) {}

  public async execute({
    id,
    pessoa_id,
    local_id,
    data,
    create_at,
    update_at,
  }: IRequest): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const doacoes = await this.doacoesRepository.findById(id);
    if (!doacoes) {
      throw new Error('Id not found');
    }

    if (pessoa_id) {
      doacoes.pessoa_id = pessoa_id;
    }

    if (local_id) {
      doacoes.local_id = local_id;
    }

    if (data) {
      doacoes.data = data;
    }

    if (create_at) {
      doacoes.create_at = create_at;
    }

    if (update_at) {
      doacoes.update_at = update_at;
    }

    await this.doacoesRepository.update(doacoes);
  }
}
