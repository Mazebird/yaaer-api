import express, { Request, Response } from 'express';
import turnOrderController from '../controllers/turnOrderController'

const router = express.Router();

// Endpoint racine
router.get('/', (req: Request, res: Response) => {
    res.send('Bienvenue sur mon API !');
});

router.post('/turnOrder', turnOrderController.getTurnOrder);

export default router;