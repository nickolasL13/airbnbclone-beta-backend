import { Router } from 'express';
import * as mongoController from '../controllers/mongoController';

const router = Router();

router.get('/', mongoController.getImoveis);
router.post('/', mongoController.postImoveis);
router.get('/:id', mongoController.getImovel);

export default router;