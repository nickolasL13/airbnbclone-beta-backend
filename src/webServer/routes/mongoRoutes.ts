import { Router } from 'express';
import * as mongoController from '../controllers/mongoController';

const router = Router();
export const path = '/alo';

router.get(path, mongoController.getAlo);
router.get(`${path}/erro`, mongoController.getAloErro);
router.get(`${path}/:nome`, mongoController.getAloComParametro);
router.post(path, mongoController.postAlo);

router.get('/', mongoController.getImoveis);

export default router;