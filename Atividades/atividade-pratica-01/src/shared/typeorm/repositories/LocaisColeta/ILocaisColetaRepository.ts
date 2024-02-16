import { ICreateLocaisColetaDTO } from '../../../../dtos/CreateLocaisColetaDTO';
import { LocaisColeta } from '../../entities/LocaisColeta';

export interface ILocaisColetaRepository {
  findById: (id: string) => Promise<LocaisColeta | undefined>;
  create: (data: ICreateLocaisColetaDTO) => Promise<LocaisColeta>;
  update: (data: LocaisColeta) => Promise<LocaisColeta>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<LocaisColeta[] | undefined>;
}
