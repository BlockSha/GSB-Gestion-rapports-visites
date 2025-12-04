// services/visiteur.service.js
const Visiteur = require('../models/Visiteur.ts');
const bcrypt = require('bcrypt');

interface VisiteurData {
    nom?: string;
    prenom?: string;
    email?: string;
    motDePasse?: string;
    [key: string]: any;
}

class VisiteurService {

    async createVisiteur(data: VisiteurData) {
        data.motDePasse = await bcrypt.hash(data.motDePasse, 10);
        return await Visiteur.create(data);
    }

    async getAllVisiteurs() {
        return await Visiteur.find();
    }

    async getVisiteurById(id: string) {
        return await Visiteur.findById(id);
    }

    async updateVisiteur(id: string, data: Partial<VisiteurData>) {
        if (data.motDePasse) {
            data.motDePasse = await bcrypt.hash(data.motDePasse, 10);
        }
        return await Visiteur.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteVisiteur(id: string) {
        return await Visiteur.findByIdAndDelete(id);
    }
}

module.exports = new VisiteurService();
