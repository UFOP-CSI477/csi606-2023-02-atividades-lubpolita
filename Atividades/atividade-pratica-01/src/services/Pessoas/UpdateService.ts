/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { IPessoasRepository } from '../../shared/typeorm/repositories/Pessoas/IPessoasRepository';

interface IRequest {
  id: string;
  nome?: string;
  rua?: string;
  numero?: string;
  complemento?: string;
  rg?: string;
  cidade_id?: string;
  tipo_id?: string;
  create_at?: string;
  update_at?: string;
}

@injectable()
export default class UpdatePessoasService {
  constructor(
    @inject('PessoasRepository')
    private readonly pessoasRepository: IPessoasRepository,
  ) {}

  public async execute({
    id,
    nome,
    rua,
    numero,
    complemento,
    rg,
    cidade_id,
    tipo_id,
    create_at,
    update_at,
  }: IRequest): Promise<void> {
    if (!id) {
      throw new Error('Please, enter a valid Id');
    }

    const pessoa = await this.pessoasRepository.findById(id);
    if (!pessoa) {
      throw new Error('Id not found');
    }

    if (nome) {
      pessoa.nome = nome;
    }

    if (rua) {
      pessoa.rua = rua;
    }

    if (numero) {
      pessoa.numero = numero;
    }

    if (complemento) {
      pessoa.complemento = complemento;
    }

    if (rg) {
      pessoa.rg = rg;
    }

    if (cidade_id) {
      pessoa.cidade_id = cidade_id;
    }

    if (tipo_id) {
      pessoa.tipo_id = tipo_id;
    }

    if (create_at) {
      pessoa.create_at = create_at;
    }

    if (update_at) {
      pessoa.update_at = update_at;
    }

    await this.pessoasRepository.update(pessoa);
  }
}
