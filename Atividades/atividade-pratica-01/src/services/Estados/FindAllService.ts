/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { Estados } from '../../shared/typeorm/entities/Estados';
import { IEstadosRepository } from '../../shared/typeorm/repositories/Estados/IEstadosRepository';

@injectable()
export default class FindAllEstadosService {
  constructor(
    @inject('EstadosRepository')
    private readonly cidadesRepository: IEstadosRepository,
  ) {}

  public async execute(): Promise<Estados[] | undefined> {
    const cidadesArray = await this.cidadesRepository.findAll();
    return cidadesArray;
  }
}
