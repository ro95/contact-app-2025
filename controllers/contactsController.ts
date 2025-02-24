// controllers/contactsController.ts

import { Request, Response } from "express";
import Contact from "../models/Contact"; // Assure-toi d'avoir un modèle Contact approprié

// Récupérer tous les contacts
export const getContacts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const contacts = await Contact.find();
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

// Récupérer un contact par ID
export const getContactById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact non trouvé" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

// Créer un nouveau contact
export const createContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { firstName, lastName, phone, job, photo } = req.body;
    const newContact = new Contact({ firstName, lastName, phone, job, photo });
    const savedContact = await newContact.save();
    return res.status(201).json(savedContact);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

// Mettre à jour un contact existant
export const updateContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ error: "Contact non trouvé" });
    }
    return res.status(200).json(updatedContact);
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

// Supprimer un contact
export const deleteContact = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: "Contact non trouvé" });
    }
    return res.status(200).json({ message: "Contact supprimé avec succès" });
  } catch (error) {
    return res.status(500).json({ error: "Erreur serveur" });
  }
};
