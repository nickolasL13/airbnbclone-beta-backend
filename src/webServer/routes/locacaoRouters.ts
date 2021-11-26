import { Router } from 'express';
import * as locacaoController from '../controllers/locacaoController';

const router = Router();

router.get('/locacao/', locacaoController.getLocacao);
router.post('/locacao/', locacaoController.postLocacao);
router.get('/locacao/:id', locacaoController.getLocacaoID);
router.post('/locacao/delete', locacaoController.deleteLocacao);

export default router;