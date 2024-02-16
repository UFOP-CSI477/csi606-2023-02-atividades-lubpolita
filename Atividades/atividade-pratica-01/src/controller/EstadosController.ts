import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateEstadosService from '../services/Estados/CreateService';
import DeleteEstadosService from '../services/Estados/DeleteService';
import FindAllEstadosService from '../services/Estados/FindAllService';
import FindByIdService from '../services/Estados/FindByIdService';
import UpdateEstadosService from '../services/Estados/UpdateService';

export class EstadosController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createEstados = container.resolve(CreateEstadosService);
      const task = await createEstados.execute(request.body);
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
      const findAllEstados = container.resolve(FindAllEstadosService);
      const taskArray = await findAllEstados.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteEstados = container.resolve(DeleteEstadosService);
      const { id } = request.params;
      await deleteEstados.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateEstados = container.resolve(UpdateEstadosService);
      const { id } = request.params;
      const { nome, sigla, create_at, update_at } = request.body;

      await updateEstados.execute({
        id,
        nome,
        sigla,
        create_at,
        update_at,
      });

      return response
        .status(200)
        .json({ message: 'Estado updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
