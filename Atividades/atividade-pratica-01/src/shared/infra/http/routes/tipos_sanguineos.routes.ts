import { Router } from 'express';
import { TiposSanguineosController } from '../../../../controller/TiposSanguineosController';

const tiposSanguineosController = new TiposSanguineosController();
const tiposSanguineosRoutes = Router();

tiposSanguineosRoutes.post('/', tiposSanguineosController.create);

tiposSanguineosRoutes.get('/', tiposSanguineosController.findAll);

tiposSanguineosRoutes.delete('/delete/:id', tiposSanguineosController.delete);

tiposSanguineosRoutes.post('/update/:id', tiposSanguineosController.update);

tiposSanguineosRoutes.get('/:id', tiposSanguineosController.findById);

export default tiposSanguineosRoutes;
