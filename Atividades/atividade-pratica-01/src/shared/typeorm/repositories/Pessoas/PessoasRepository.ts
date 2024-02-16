/* eslint-disable import/extensions */
import { Repository } from 'typeorm';
import { dataSource } from '../..';
import { ICreatePessoasDTO } from '../../../../dtos/CreatePessoasDTO';
import { Pessoas } from '../../entities/Pessoas';
import { IPessoasRepository } from './IPessoasRepository';

export default class PessoasRepository implements IPessoasRepository {
  private readonly ormRepository: Repository<Pessoas>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Pessoas);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async create(data: ICreatePessoasDTO): Promise<Pessoas> {
    const pessoas = this.ormRepository.create(data);
    await this.ormRepository.save(pessoas);
    return pessoas;
  }

  public async findById(id: string): Promise<Pessoas | undefined> {
    const pessoas = await this.ormRepository.findOne({ where: { id } });
    return pessoas;
  }

  public async findAll(): Promise<Pessoas[] | undefined> {
    const pessoas = await this.ormRepository.find();
    return pessoas;
  }

  public async findByName(name: string): Promise<Pessoas[] | undefined> {
    const pessoas = await this.ormRepository.find({
      where: { nome: name },
    });
    return pessoas;
  }

  public async update(data: Pessoas): Promise<Pessoas> {
    const pessoas = await this.ormRepository.save(data);
    return pessoas;
  }
}
