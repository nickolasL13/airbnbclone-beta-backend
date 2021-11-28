import { Router } from 'express';
import * as locacaoController from '../controllers/locacaoController';

const router = Router();

router.get('/', locacaoController.getLocacao);
router.post('/', locacaoController.postLocacao);
router.get('/:id', locacaoController.getLocacaoID);
router.delete('/:id', locacaoController.deleteLocacao);

export default router;