/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateEstadosDTO } from '../../../../dtos/CreateEstadosDTO';
import { Estados } from '../../entities/Estados';
import { IEstadosRepository } from './IEstadosRepository';

export default class EstadosRepository implements IEstadosRepository {
  private readonly ormRepository: Repository<Estados>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Estados);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreateEstadosDTO): Promise<Estados> {
    const estados = this.ormRepository.create(data);
    await this.ormRepository.save(estados);
    return estados;
  }

  public async findById(id: string): Promise<Estados | undefined> {
    const estados = await this.ormRepository.findOne({ where: { id } });
    return estados;
  }

  public async findAll(): Promise<Estados[] | undefined> {
    const estados = await this.ormRepository.find();
    return estados;
  }

  public async findByName(name: string): Promise<Estados[] | undefined> {
    const estados = await this.ormRepository.find({
      where: { nome: name },
    });
    return estados;
  }

  public async update(data: Estados): Promise<Estados> {
    const estados = await this.ormRepository.save(data);
    return estados;
  }
}
