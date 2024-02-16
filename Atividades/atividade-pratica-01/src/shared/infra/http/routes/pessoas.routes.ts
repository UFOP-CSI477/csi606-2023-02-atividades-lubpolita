import { Router } from 'express';
import { PessoasController } from '../../../../controller/PessoasController';

const pessoasController = new PessoasController();
const pessoasRoutes = Router();

pessoasRoutes.post('/', pessoasController.create);

pessoasRoutes.get('/', pessoasController.findAll);

pessoasRoutes.delete('/delete/:id', pessoasController.delete);

pessoasRoutes.post('/update/:id', pessoasController.update);

pessoasRoutes.get('/:id', pessoasController.findById);

pessoasRoutes.get('/:name', pessoasController.findByName);

export default pessoasRoutes;
