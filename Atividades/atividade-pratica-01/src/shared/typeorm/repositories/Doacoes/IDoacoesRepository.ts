import { ICreateDoacoesDTO } from '../../../../dtos/CreateDoacoesDTO';
import { Doacoes } from '../../entities/Doacoes';

export interface IDoacoesRepository {
  findById: (id: string) => Promise<Doacoes | undefined>;
  create: (data: ICreateDoacoesDTO) => Promise<Doacoes>;
  update: (data: Doacoes) => Promise<Doacoes>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<Doacoes[] | undefined>;
}
