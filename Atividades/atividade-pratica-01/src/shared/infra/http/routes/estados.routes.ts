import { Router } from 'express';
import { EstadosController } from '../../../../controller/EstadosController';

const estadosController = new EstadosController();
const estadosRoutes = Router();

estadosRoutes.post('/', estadosController.create);

estadosRoutes.get('/', estadosController.findAll);

estadosRoutes.delete('/delete/:id', estadosController.delete);

estadosRoutes.post('/update/:id', estadosController.update);

estadosRoutes.get('/:id', estadosController.findById);

estadosRoutes.get('/:name', estadosController.findByName);

export default estadosRoutes;
