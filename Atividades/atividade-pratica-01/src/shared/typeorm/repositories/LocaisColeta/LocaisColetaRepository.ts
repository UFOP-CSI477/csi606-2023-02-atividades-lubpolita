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
    const locaisColeta = this.ormRepository.create(data);
    await this.ormRepository.save(locaisColeta);
    return locaisColeta;
  }

  public async findById(id: string): Promise<LocaisColeta | undefined> {
    const locaisColeta = await this.ormRepository.findOne({ where: { id } });
    return locaisColeta;
  }

  public async findByName(name: string): Promise<LocaisColeta[] | undefined> {
    const locaisColeta = await this.ormRepository.find({
      where: { nome: name },
    });
    return locaisColeta;
  }

  public async findAll(): Promise<LocaisColeta[] | undefined> {
    const locaisColeta = await this.ormRepository.find();
    return locaisColeta;
  }

  public async update(data: LocaisColeta): Promise<LocaisColeta> {
    const locaisColeta = await this.ormRepository.save(data);
    return locaisColeta;
  }
}
