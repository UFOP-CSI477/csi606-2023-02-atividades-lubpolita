/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateEstadosDTO } from '../../dtos/CreateEstadosDTO';
import { Estados } from '../../shared/typeorm/entities/Estados';
import { IEstadosRepository } from '../../shared/typeorm/repositories/Estados/IEstadosRepository';

@injectable()
export default class CreateEstadosService {
  constructor(
    @inject('EstadosRepository')
    private readonly cidadesRepository: IEstadosRepository,
  ) {}

  public async execute(data: ICreateEstadosDTO): Promise<Estados> {
    const cidades = await this.cidadesRepository.create(data);
    return cidades;
  }
}
