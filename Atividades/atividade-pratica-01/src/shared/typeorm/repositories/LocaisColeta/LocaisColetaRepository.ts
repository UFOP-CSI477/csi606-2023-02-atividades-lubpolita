/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateLocaisColetaDTO } from '../../../../dtos/CreateLocaisColetaDTO';
import { LocaisColeta } from '../../entities/LocaisColeta';
import { ILocaisColetaRepository } from './ILocaisColetaRepository';

export default class LocaisColetaRepository implements ILocaisColetaRepository {
  private readonly ormRepository: Repository<LocaisColeta>;

  constructor() {
    this.ormRepository = dataSource.getRepository(LocaisColeta);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreateLocaisColetaDTO): Promise<LocaisColeta> {
    const doacoes = this.ormRepository.create(data);
    await this.ormRepository.save(doacoes);
    return doacoes;
  }

  public async findById(id: string): Promise<LocaisColeta | undefined> {
    const doacoes = await this.ormRepository.findOne({ where: { id } });
    return doacoes;
  }

  public async findAll(): Promise<LocaisColeta[] | undefined> {
    const doacoes = await this.ormRepository.find();
    return doacoes;
  }

  public async update(data: LocaisColeta): Promise<LocaisColeta> {
    const doacoes = await this.ormRepository.save(data);
    return doacoes;
  }
}
