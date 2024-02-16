import { Request, Response } from 'express';
import 'reflect-metadata';
import { container } from 'tsyringe';
import CreateTiposSanguineosService from '../services/TiposSanguineos/CreateService';
import DeleteTiposSanguineosService from '../services/TiposSanguineos/DeleteService';
import FindAllTiposSanguineosService from '../services/TiposSanguineos/FindAllService';
import FindByIdService from '../services/TiposSanguineos/FindByIdService';
import UpdateTiposSanguineosService from '../services/TiposSanguineos/UpdateService';

export class TiposSanguineosController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const createTiposSanguineos = container.resolve(
        CreateTiposSanguineosService,
      );
      const task = await createTiposSanguineos.execute(request.body);
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
      const findAllTiposSanguineos = container.resolve(
        FindAllTiposSanguineosService,
      );
      const taskArray = await findAllTiposSanguineos.execute();
      return response.status(201).json(taskArray);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    try {
      const deleteTiposSanguineos = container.resolve(
        DeleteTiposSanguineosService,
      );
      const { id } = request.params;
      await deleteTiposSanguineos.execute(id);
      return response.status(201).json();
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  public async update(request: Request, response: Response): Promise<Response> {
    try {
      const updateTiposSanguineos = container.resolve(
        UpdateTiposSanguineosService,
      );
      const { id } = request.params;
      const { tipo, fator, create_at, update_at } = request.body;

      await updateTiposSanguineos.execute({
        id,
        tipo,
        fator,
        create_at,
        update_at,
      });

      return response
        .status(200)
        .json({ message: 'Tipo sanguíneo updated successfully' });
    } catch (err) {
      console.error(err);
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}
