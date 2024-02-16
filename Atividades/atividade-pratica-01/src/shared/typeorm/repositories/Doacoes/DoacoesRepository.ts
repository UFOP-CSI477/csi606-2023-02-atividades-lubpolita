/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateDoacoesDTO } from '../../../../dtos/CreateDoacoesDTO';
import { Doacoes } from '../../entities/Doacoes';
import { IDoacoesRepository } from './IDoacoesRepository';

export default class DoacoesRepository implements IDoacoesRepository {
  private readonly ormRepository: Repository<Doacoes>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Doacoes);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreateDoacoesDTO): Promise<Doacoes> {
    const doacoes = this.ormRepository.create(data);
    await this.ormRepository.save(doacoes);
    return doacoes;
  }

  public async findById(id: string): Promise<Doacoes | undefined> {
    const doacoes = await this.ormRepository.findOne({ where: { id } });
    return doacoes;
  }

  public async findAll(): Promise<Doacoes[] | undefined> {
    const doacoes = await this.ormRepository.find();
    return doacoes;
  }

  public async update(data: Doacoes): Promise<Doacoes> {
    const doacoes = await this.ormRepository.save(data);
    return doacoes;
  }
}
