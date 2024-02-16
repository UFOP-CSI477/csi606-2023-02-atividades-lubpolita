import { ICreatePessoasDTO } from '../../../../dtos/CreatePessoasDTO';
import { Pessoas } from '../../entities/Pessoas';

export interface IPessoasRepository {
  findById: (id: string) => Promise<Pessoas | undefined>;
  findByName: (name: string) => Promise<Pessoas[] | undefined>;
  create: (data: ICreatePessoasDTO) => Promise<Pessoas>;
  update: (data: Pessoas) => Promise<Pessoas>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<Pessoas[] | undefined>;
}
