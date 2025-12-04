// src/routes/Visite.ts
import { Router } from 'express';
import VisiteController from '../controllers/Visite';

const router = Router();

router.post('/', VisiteController.create);
router.get('/', VisiteController.getAll);
router.get('/:id', VisiteController.getById);
router.put('/:id', VisiteController.update);
router.delete('/:id', VisiteController.delete);

export default router;
