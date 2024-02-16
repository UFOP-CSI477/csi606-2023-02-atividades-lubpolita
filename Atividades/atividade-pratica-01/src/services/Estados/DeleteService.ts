/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IEstadosRepository } from '../../shared/typeorm/repositories/Estados/IEstadosRepository';

@injectable()
export default class DeleteEstadosService {
  constructor(
    @inject('EstadosRepository')
    private readonly cidadesRepository: IEstadosRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const cidadesExists = await this.cidadesRepository.findById(id);
    if (!cidadesExists) {
      throw new Error('Invalid cidades id');
    }

    await this.cidadesRepository.delete(id);
  }
}
