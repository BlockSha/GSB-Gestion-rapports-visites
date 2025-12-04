import { Request, Response } from 'express';
const VisiteurService: any = require('../services/Visiteur');

class VisiteurController {

    async create(req: Request, res: Response) {
        try {
            const visiteur = await VisiteurService.createVisiteur(req.body);
            res.status(201).json(visiteur);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAll(_req: Request, res: Response) {
        try {
            const visiteurs = await VisiteurService.getAllVisiteurs();
            res.status(200).json(visiteurs);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const visiteur = await VisiteurService.getVisiteurById((req.params as any).id);
            res.status(200).json(visiteur);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req: Request, res: Response) {
        try {
            const visiteur = await VisiteurService.updateVisiteur((req.params as any).id, req.body);
            res.status(200).json(visiteur);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await VisiteurService.deleteVisiteur((req.params as any).id);
            res.status(204).send();
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default new VisiteurController();
