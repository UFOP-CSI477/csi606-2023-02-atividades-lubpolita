/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreateTiposSanguineosDTO } from '../../../../dtos/CreateTiposSanguineosDTO';
import { TiposSanguineos } from '../../entities/TiposSanguineos';
import { ITiposSanguineosRepository } from './ITiposSanguineosRepository';

export default class TiposSanguineosRepository
  implements ITiposSanguineosRepository
{
  private readonly ormRepository: Repository<TiposSanguineos>;

  constructor() {
    this.ormRepository = dataSource.getRepository(TiposSanguineos);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(
    data: ICreateTiposSanguineosDTO,
  ): Promise<TiposSanguineos> {
    const tiposSanguineos = this.ormRepository.create(data);
    await this.ormRepository.save(tiposSanguineos);
    return tiposSanguineos;
  }

  public async findById(id: string): Promise<TiposSanguineos | undefined> {
    const tiposSanguineos = await this.ormRepository.findOne({ where: { id } });
    return tiposSanguineos;
  }

  public async findAll(): Promise<TiposSanguineos[] | undefined> {
    const tiposSanguineos = await this.ormRepository.find();
    return tiposSanguineos;
  }

  public async update(data: TiposSanguineos): Promise<TiposSanguineos> {
    const tiposSanguineos = await this.ormRepository.save(data);
    return tiposSanguineos;
  }
}
