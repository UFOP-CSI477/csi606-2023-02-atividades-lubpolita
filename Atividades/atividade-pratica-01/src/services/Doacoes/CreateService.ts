/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ICreateDoacoesDTO } from '../../dtos/CreateDoacoesDTO';
import { Doacoes } from '../../shared/typeorm/entities/Doacoes';
import { IDoacoesRepository } from '../../shared/typeorm/repositories/Doacoes/IDoacoesRepository';

@injectable()
export default class CreateDoacoesService {
  constructor(
    @inject('DoacoesRepository')
    private readonly cidadesRepository: IDoacoesRepository,
  ) {}

  public async execute(data: ICreateDoacoesDTO): Promise<Doacoes> {
    const cidades = await this.cidadesRepository.create(data);
    return cidades;
  }
}
