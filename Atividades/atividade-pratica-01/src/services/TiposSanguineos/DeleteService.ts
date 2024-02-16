/* eslint-disable no-empty-function */
import { inject, injectable } from 'tsyringe';
import { ITiposSanguineosRepository } from '../../shared/typeorm/repositories/TIposSanguineos/ITiposSanguineosRepository';

@injectable()
export default class DeleteTiposSanguineosService {
  constructor(
    @inject('TiposSanguineosRepository')
    private readonly pessoasRepository: ITiposSanguineosRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const pessoasExists = await this.pessoasRepository.findById(id);
    if (!pessoasExists) {
      throw new Error('Invalid pessoas id');
    }

    await this.pessoasRepository.delete(id);
  }
}
