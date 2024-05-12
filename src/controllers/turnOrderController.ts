import { Request, Response } from 'express';
import turnOrderService from '../services/turnOrderService';

const getTurnOrder = (req: Request, res: Response) => {
    if (!req.body.nbPlayer){
        throw new Error("Paramètre manquant");
    }
  try {
    const turnOrders = turnOrderService.getTurnOrders(req.body.nbPlayer);
    res.status(200).json(turnOrders);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export default {
    getTurnOrder
};