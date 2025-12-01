const mongoose = require('mongoose');

const VisiteurSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    motDePasse: { type: String, required: true },
    dateCreation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Visiteur', VisiteurSchema);
