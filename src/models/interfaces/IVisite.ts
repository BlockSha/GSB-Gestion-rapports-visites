// src/interfaces/IVisite.ts

import mongoose from "mongoose";

/**
 * Interface représentant une visite
 */
export interface IVisite {
  _id?: string;
  date: Date;
  commentaire: string;
  visiteur: mongoose.Types.ObjectId;
  praticien: string;
  motif: string;
  dateCreation?: Date;
}

/**
 * Interface pour la création d'une visite
 */
export interface ICreateVisite {
  date: Date;
  commentaire: string;
  visiteur: string; // ID du visiteur
  praticien: string;
  motif: string;
}
