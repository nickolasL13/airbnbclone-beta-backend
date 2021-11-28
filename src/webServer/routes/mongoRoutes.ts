import { Router } from 'express';
import * as mongoController from '../controllers/mongoController';
import * as reservaController from '../controllers/reservaController';
import { ImovelModel } from '../../database/persistencia/imovelModel';
const router = Router();

router.get('/', mongoController.getImoveis);
router.post('/', mongoController.postImoveis);
router.delete('/imovel/:id', mongoController.deleteImovel);
router.get('/imovel/:id', mongoController.getImovel);
router.get('/arCond', mongoController.getImovelArCond);
router.get('/wifi', mongoController.getImovelWifi);
router.get('/cozinha', mongoController.getImovelCozinha);
router.get('/freePark', mongoController.getImovelFreeParking);
router.get('/piscina', mongoController.getImovelPiscina);
router.get('/preco/:minPrice/:maxPrice', mongoController.getImovelPreco);
router.get('/espaco/:espaco', mongoController.getImovelEspaco);
router.get('/cidade/:cidade', mongoController.getImovelCidade);
router.get('/estado/:estado', mongoController.getImovelEstado);
router.get('/reserva', reservaController.getLocacao);
router.post('/reserva', reservaController.postLocacao);
router.get('/reserva/:id', reservaController.getLocacaoID);
router.post('/reserva/delete', reservaController.deleteLocacao);

export default router;