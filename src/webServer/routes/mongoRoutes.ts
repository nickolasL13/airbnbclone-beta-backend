import { Router } from 'express';
import * as mongoController from '../controllers/mongoController';

const router = Router();

router.get('/', mongoController.getImoveis);
router.post('/', mongoController.postImoveis);

export default router;