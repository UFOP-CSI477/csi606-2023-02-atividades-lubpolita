/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Estados } from '../../shared/typeorm/entities/Estados';
import { IEstadosRepository } from '../../shared/typeorm/repositories/Estados/IEstadosRepository';

@injectable()
export default class FindByIdService {
  constructor(
    @inject('EstadosRepository')
    private readonly cidadesRepository: IEstadosRepository,
  ) {}

  public async execute(id: string): Promise<Estados | undefined> {
    const cidades = await this.cidadesRepository.findById(id);
    return cidades;
  }
}
