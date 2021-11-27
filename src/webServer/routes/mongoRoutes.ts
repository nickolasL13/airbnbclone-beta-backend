import { Router } from 'express';
import * as mongoController from '../controllers/mongoController';

const router = Router();

router.get('/', mongoController.getImoveis);
router.post('/', mongoController.postImoveis);
router.delete('/:id', mongoController.deleteImovel);
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

export default router;