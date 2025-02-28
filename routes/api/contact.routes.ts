import express from "express";
import {
  getContacts,
  addContact,
  deleteContact,
  updateContact,
} from "../../controllers/contactsController";

const router = express.Router();

router.get("/", getContacts);
router.post("/", addContact);

export default router;
