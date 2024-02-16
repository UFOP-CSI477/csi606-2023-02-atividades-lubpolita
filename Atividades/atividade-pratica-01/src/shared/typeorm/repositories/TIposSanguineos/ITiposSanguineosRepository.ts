import { ICreateTiposSanguineosDTO } from '../../../../dtos/CreateTiposSanguineosDTO';
import { TiposSanguineos } from '../../entities/TiposSanguineos';

export interface ITiposSanguineosRepository {
  findById: (id: string) => Promise<TiposSanguineos | undefined>;
  create: (data: ICreateTiposSanguineosDTO) => Promise<TiposSanguineos>;
  update: (data: TiposSanguineos) => Promise<TiposSanguineos>;
  delete(id: string): Promise<void>;
  findAll: () => Promise<TiposSanguineos[] | undefined>;
}
