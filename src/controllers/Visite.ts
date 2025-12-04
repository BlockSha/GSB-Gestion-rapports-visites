// src/controllers/Visite.ts
import { Request, Response } from 'express';
import VisiteService from '../services/Visite';

class VisiteController {
    async create(req: Request, res: Response) {
        try {
            const visite = await VisiteService.createVisite(req.body);
            res.status(201).json(visite);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const visites = await VisiteService.getAllVisites();
            res.status(200).json(visites);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const visite = await VisiteService.getVisiteById(req.params.id);
            res.status(200).json(visite);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const visite = await VisiteService.updateVisite(req.params.id, req.body);
            res.status(200).json(visite);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await VisiteService.deleteVisite(req.params.id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default new VisiteController();
