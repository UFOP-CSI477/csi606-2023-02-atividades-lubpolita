import { container } from 'tsyringe';
import CidadesRepository from '../../typeorm/repositories/Cidades/CidadesRepository';
import { ICidadesRepository } from '../../typeorm/repositories/Cidades/ICidadesRepository';
import DoacoesRepository from '../../typeorm/repositories/Doacoes/DoacoesRepository';
import { IDoacoesRepository } from '../../typeorm/repositories/Doacoes/IDoacoesRepository';
import EstadosRepository from '../../typeorm/repositories/Estados/EstadosRepository';
import { IEstadosRepository } from '../../typeorm/repositories/Estados/IEstadosRepository';
import { ILocaisColetaRepository } from '../../typeorm/repositories/LocaisColeta/ILocaisColetaRepository';
import LocaisColetaRepository from '../../typeorm/repositories/LocaisColeta/LocaisColetaRepository';
import { IPessoasRepository } from '../../typeorm/repositories/Pessoas/IPessoasRepository';
import PessoasRepository from '../../typeorm/repositories/Pessoas/PessoasRepository';
import { ITiposSanguineosRepository } from '../../typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';
import TiposSanguineosRepository from '../../typeorm/repositories/TIposSanguineos/TiposSanguineosRepository';

container.registerSingleton<ICidadesRepository>(
  'CidadesRepository',
  CidadesRepository,
);

container.registerSingleton<IDoacoesRepository>(
  'DoacoesRepository',
  DoacoesRepository,
);

container.registerSingleton<IEstadosRepository>(
  'EstadosRepository',
  EstadosRepository,
);

container.registerSingleton<ILocaisColetaRepository>(
  'LocaisColetaRepository',
  LocaisColetaRepository,
);

container.registerSingleton<IPessoasRepository>(
  'PessoasRepository',
  PessoasRepository,
);

container.registerSingleton<ITiposSanguineosRepository>(
  'TiposSanguineosRepository',
  TiposSanguineosRepository,
);
