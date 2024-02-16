/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateCidadesDTO } from '../../../../dtos/CreateCidadesDTO';
import { Cidades } from '../../entities/Cidades';
import { ICidadesRepository } from './ICidadesRepository';

export default class CidadesRepository implements ICidadesRepository {
  private readonly ormRepository: Repository<Cidades>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Cidades);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreateCidadesDTO): Promise<Cidades> {
    const cidades = this.ormRepository.create(data);
    await this.ormRepository.save(cidades);
    return cidades;
  }

  public async findById(id: string): Promise<Cidades | undefined> {
    const cidades = await this.ormRepository.findOne({ where: { id } });
    return cidades;
  }

  public async findAll(): Promise<Cidades[] | undefined> {
    const cidades = await this.ormRepository.find();
    return cidades;
  }

  public async findByName(name: string): Promise<Cidades[] | undefined> {
    const cidades = await this.ormRepository.find({
      where: { nome: name },
    });
    return cidades;
  }

  public async update(data: Cidades): Promise<Cidades> {
    const cidades = await this.ormRepository.save(data);
    return cidades;
  }
}
