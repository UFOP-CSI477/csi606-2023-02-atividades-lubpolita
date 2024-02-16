import { Router } from 'express';
import { LocaisColetaController } from '../../../../controller/LocaisColetaController';

const locaisColetaController = new LocaisColetaController();
const locaisColetaRoutes = Router();

locaisColetaRoutes.post('/', locaisColetaController.create);

locaisColetaRoutes.get('/', locaisColetaController.findAll);

locaisColetaRoutes.delete('/delete/:id', locaisColetaController.delete);

locaisColetaRoutes.post('/update/:id', locaisColetaController.update);

locaisColetaRoutes.get('/:id', locaisColetaController.findById);

export default locaisColetaRoutes;
