import { Request, Response } from "express";
import Contact from "../models/contacts";

export const getContacts = async (req: Request, res: Response) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const addContact = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact({ name, email, phone });
  await newContact.save();
  res.json(newContact);
};

export const deleteContact = async (req: Request, res: Response) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ msg: "Contact not found" });
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.json({ msg: "Contact removed" });
};

export const updateContact = async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const contactFields = { name, email, phone };
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    return res.status(404).json({ msg: "Contact not found" });
  }
  await contact.updateOne(contactFields);
  res.json({ msg: "Contact updated" });
};
