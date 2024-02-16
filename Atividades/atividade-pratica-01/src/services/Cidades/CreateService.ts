/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateCidadesDTO } from '../../dtos/CreateCidadesDTO';
import { Cidades } from '../../shared/typeorm/entities/Cidades';
import { ICidadesRepository } from '../../shared/typeorm/repositories/Cidades/ICidadesRepository';

@injectable()
export default class CreateCidadesService {
  constructor(
    @inject('CidadesRepository')
    private readonly cidadesRepository: ICidadesRepository,
  ) {}

  public async execute(data: ICreateCidadesDTO): Promise<Cidades> {
    const cidades = await this.cidadesRepository.create(data);
    return cidades;
  }
}
