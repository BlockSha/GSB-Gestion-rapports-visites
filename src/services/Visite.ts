// src/services/Visite.ts
import { VisiteModel, IVisiteDocument } from '../models/Visite';
import { ICreateVisite } from '../models/interfaces/IVisite';

export class VisiteService {

    public async createVisite(data: ICreateVisite): Promise<IVisiteDocument> {
        try {
            const visite = new VisiteModel(data);
            await visite.save();
            return visite;
        } catch (error: any) {
            if (error.name === 'ValidationError') {
                const messages = Object.values(error.errors).map((err: any) => err.message);
                throw new Error(`Validation échouée: ${messages.join(', ')}`);
            }
            throw error;
        }
    }

    public async getAllVisites(): Promise<IVisiteDocument[]> {
        return await VisiteModel.find().populate('visiteur').sort({ date: -1 }).exec();
    }

    public async getVisiteById(id: string): Promise<IVisiteDocument | null> {
        const visite = await VisiteModel.findById(id).populate('visiteur').exec();
        if (!visite) throw new Error(`Visite avec l'ID ${id} introuvable`);
        return visite;
    }

    public async updateVisite(id: string, data: Partial<ICreateVisite>): Promise<IVisiteDocument | null> {
        const visite = await VisiteModel.findByIdAndUpdate(id, data, { new: true, runValidators: true }).exec();
        if (!visite) throw new Error(`Visite avec l'ID ${id} introuvable`);
        return visite;
    }

    public async deleteVisite(id: string): Promise<void> {
        const visite = await VisiteModel.findByIdAndDelete(id).exec();
        if (!visite) throw new Error(`Visite avec l'ID ${id} introuvable`);
    }
}

export default new VisiteService();
