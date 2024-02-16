import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateCidadesService from '../services/Cidades/CreateService';
import DeleteCidadesService from '../services/Cidades/DeleteService';
import FindAllCidadesService from '../services/Cidades/FindAllService';
import FindByIdService from '../services/Cidades/FindByIdService';
import UpdateCidadesService from '../services/Cidades/UpdateService';

export class CidadesController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createCidades = container.resolve(CreateCidadesService);
      const task = await createCidades.execute(request.body);
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
      const findAllCidades = container.resolve(FindAllCidadesService);
      const taskArray = await findAllCidades.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteCidades = container.resolve(DeleteCidadesService);
      const { id } = request.params;
      await deleteCidades.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateCidades = container.resolve(UpdateCidadesService);
      const { id } = request.params;
      const { nome, estado_id, create_at, update_at } = request.body;

      await updateCidades.execute({
        id,
        nome,
        estado_id,
        create_at,
        update_at,
      });

      return response
        .status(200)
        .json({ message: 'Cidade updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
