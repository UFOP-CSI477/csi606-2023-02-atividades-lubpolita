import { Router } from 'express';
import cidadesRoutes from './cidades.routes';
import doacoesRoutes from './doacoes.routes';
import estadosRoutes from './estados.routes';
import locaisColetaRoutes from './locais.routes';
import pessoasRoutes from './pessoas.routes';
import tiposSanguineosRoutes from './tipos_sanguineos.routes';

const routes = Router();

routes.use('/cidades', cidadesRoutes);
routes.use('/doacoes', doacoesRoutes);
routes.use('/estados', estadosRoutes);
routes.use('/locais-coleta', locaisColetaRoutes);
routes.use('/pessoas', pessoasRoutes);
routes.use('/tipos-sanguineos', tiposSanguineosRoutes);

export default routes;
