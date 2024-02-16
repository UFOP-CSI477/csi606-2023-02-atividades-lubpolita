/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ILocaisColetaRepository } from '../../shared/typeorm/repositories/LocaisColeta/ILocaisColetaRepository';

interface IRequest {
  id: string;
  nome?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  cidade_id?: string;
  create_at?: string;
  update_at?: string;
}

@injectable()
export default class UpdateLocaisColetaService {
  constructor(
    @inject('LocaisColetaRepository')
    private readonly locaisColetaRepository: ILocaisColetaRepository,
  ) {}

  public async execute({
    id,
    nome,
    rua,
    numero,
    complemento,
    cidade_id,
    create_at,
    update_at,
  }: IRequest): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const localColeta = await this.locaisColetaRepository.findById(id);
    if (!localColeta) {
      throw new Error('Id not found');
    }

    if (nome) {
      localColeta.nome = nome;
    }

    if (rua) {
      localColeta.rua = rua;
    }

    if (numero) {
      localColeta.numero = numero;
    }

    if (complemento) {
      localColeta.complemento = complemento;
    }

    if (cidade_id) {
      localColeta.cidade_id = cidade_id;
    }

    if (create_at) {
      localColeta.create_at = create_at;
    }

    if (update_at) {
      localColeta.update_at = update_at;
    }

    await this.locaisColetaRepository.update(localColeta);
  }
}
