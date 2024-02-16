import { ICreateCidadesDTO } from '../../../../dtos/CreateCidadesDTO';
import { Cidades } from '../../entities/Cidades';

export interface ICidadesRepository {
  findById: (id: string) => Promise<Cidades | undefined>;
  findByName: (name: string) => Promise<Cidades[] | undefined>;
  create: (data: ICreateCidadesDTO) => Promise<Cidades>;
  update: (data: Cidades) => Promise<Cidades>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<Cidades[] | undefined>;
}
