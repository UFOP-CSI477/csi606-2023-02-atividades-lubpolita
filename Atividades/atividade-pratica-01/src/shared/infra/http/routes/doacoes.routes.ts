import { Router } from 'express';
import { DoacoesController } from '../../../../controller/DoacoesController';

const doacoesController = new DoacoesController();
const doacoesRoutes = Router();

doacoesRoutes.post('/', doacoesController.create);

doacoesRoutes.get('/', doacoesController.findAll);

doacoesRoutes.delete('/delete/:id', doacoesController.delete);

doacoesRoutes.post('/update/:id', doacoesController.update);

doacoesRoutes.get('/:id', doacoesController.findById);

export default doacoesRoutes;
