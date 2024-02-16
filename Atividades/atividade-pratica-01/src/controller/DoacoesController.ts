import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateDoacoesService from '../services/Doacoes/CreateService';
import DeleteDoacoesService from '../services/Doacoes/DeleteService';
import FindAllDoacoesService from '../services/Doacoes/FindAllService';
import FindByIdService from '../services/Doacoes/FindByIdService';
import UpdateDoacoesService from '../services/Doacoes/UpdateService';

export class DoacoesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createDoacoes = container.resolve(CreateDoacoesService);
      const task = await createDoacoes.execute(request.body);
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

  public async findAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const findAllDoacoes = container.resolve(FindAllDoacoesService);
      const taskArray = await findAllDoacoes.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteDoacoes = container.resolve(DeleteDoacoesService);
      const { id } = request.params;
      await deleteDoacoes.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateDoacoes = container.resolve(UpdateDoacoesService);
      const { id } = request.params;
      const { pessoa_id, local_id, data, create_at, update_at } = request.body;

      await updateDoacoes.execute({
        id,
        pessoa_id,
        local_id,
        data,
        create_at,
        update_at,
      });

      return response
        .status(200)
        .json({ message: 'Doação updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
