/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IDoacoesRepository } from '../../shared/typeorm/repositories/Doacoes/IDoacoesRepository';

@injectable()
export default class DeleteDoacoesService {
  constructor(
    @inject('DoacoesRepository')
    private readonly cidadesRepository: IDoacoesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const cidadesExists = await this.cidadesRepository.findById(id);
    if (!cidadesExists) {
      throw new Error('Invalid cidades id');
    }

    await this.cidadesRepository.delete(id);
  }
}
