import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreatePessoasService from '../services/Pessoas/CreateService';
import DeletePessoasService from '../services/Pessoas/DeleteService';
import FindAllPessoasService from '../services/Pessoas/FindAllService';
import FindByIdService from '../services/Pessoas/FindByIdService';
import UpdatePessoasService from '../services/Pessoas/UpdateService';

export class PessoasController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createPessoas = container.resolve(CreatePessoasService);
      const task = await createPessoas.execute(request.body);
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findById(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const find = container.resolve(FindByIdService);
      const { id } = request.params;
      const task = await find.execute(id);
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findByName(
    request: Request,
    response: Response,
  ): Promise<Response | undefined> {
    try {
      const find = container.resolve(FindByIdService);
      const { name } = request.params;
      const task = await find.execute(name);
      console.dir(task);
      return response.status(201).json(task);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllPessoas = container.resolve(FindAllPessoasService);
      const taskArray = await findAllPessoas.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deletePessoas = container.resolve(DeletePessoasService);
      const { id } = request.params;
      await deletePessoas.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updatePessoas = container.resolve(UpdatePessoasService);
      const { id } = request.params;
      const {
        nome,
        rua,
        numero,
        complemento,
        rg,
        cidade_id,
        tipo_id,
        create_at,
        update_at,
      } = request.body;

      await updatePessoas.execute({
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
      });

      return response
        .status(200)
        .json({ message: 'Pessoa updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
