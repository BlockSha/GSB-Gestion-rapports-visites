// routes/visiteur.routes.js
const express = require('express');
const router = express.Router();
const VisiteurController = require('../controllers/visiteur');

router.post('/', VisiteurController.create);
router.get('/', VisiteurController.getAll);
router.get('/:id', VisiteurController.getById);
router.put('/:id', VisiteurController.update);
router.delete('/:id', VisiteurController.delete);

module.exports = router;
