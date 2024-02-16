import { ICreateEstadosDTO } from '../../../../dtos/CreateEstadosDTO';
import { Estados } from '../../entities/Estados';

export interface IEstadosRepository {
  findById: (id: string) => Promise<Estados | undefined>;
  findByName: (name: string) => Promise<Estados[] | undefined>;
  create: (data: ICreateEstadosDTO) => Promise<Estados>;
  update: (data: Estados) => Promise<Estados>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<Estados[] | undefined>;
}
