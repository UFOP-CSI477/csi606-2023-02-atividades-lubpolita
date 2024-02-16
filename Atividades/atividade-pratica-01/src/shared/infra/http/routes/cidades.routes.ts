import { Router } from 'express';
import { CidadesController } from '../../../../controller/CidadesController';

const cidadesController = new CidadesController();
const cidadesRoutes = Router();

cidadesRoutes.post('/', cidadesController.create);

cidadesRoutes.get('/', cidadesController.findAll);

cidadesRoutes.delete('/delete/:id', cidadesController.delete);

cidadesRoutes.post('/update/:id', cidadesController.update);

cidadesRoutes.get('/:id', cidadesController.findById);

cidadesRoutes.get('/:name', cidadesController.findByName);

export default cidadesRoutes;
