/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ILocaisColetaRepository } from '../../shared/typeorm/repositories/LocaisColeta/ILocaisColetaRepository';

@injectable()
export default class DeleteLocaisColetaService {
  constructor(
    @inject('LocaisColetaRepository')
    private readonly cidadesRepository: ILocaisColetaRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const cidadesExists = await this.cidadesRepository.findById(id);
    if (!cidadesExists) {
      throw new Error('Invalid cidades id');
    }

    await this.cidadesRepository.delete(id);
  }
}
