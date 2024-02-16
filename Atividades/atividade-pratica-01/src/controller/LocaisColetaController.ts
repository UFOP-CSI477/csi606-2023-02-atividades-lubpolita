import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateLocaisColetaService from '../services/LocaisColeta/CreateService';
import DeleteLocaisColetaService from '../services/LocaisColeta/DeleteService';
import FindAllLocaisColetaService from '../services/LocaisColeta/FindAllService';
import FindByIdService from '../services/LocaisColeta/FindByIdService';
import UpdateLocaisColetaService from '../services/LocaisColeta/UpdateService';

export class LocaisColetaController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createLocaisColeta = container.resolve(CreateLocaisColetaService);
      const task = await createLocaisColeta.execute(request.body);
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
      const findAllLocaisColeta = container.resolve(FindAllLocaisColetaService);
      const taskArray = await findAllLocaisColeta.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteLocaisColeta = container.resolve(DeleteLocaisColetaService);
      const { id } = request.params;
      await deleteLocaisColeta.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateLocaisColeta = container.resolve(UpdateLocaisColetaService);
      const { id } = request.params;
      const {
        nome,
        rua,
        numero,
        complemento,
        cidade_id,
        create_at,
        update_at,
      } = request.body;

      await updateLocaisColeta.execute({
        id,
        nome,
        rua,
        numero,
        complemento,
        cidade_id,
        create_at,
        update_at,
      });

      return response
        .status(200)
        .json({ message: 'Local de coleta updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
