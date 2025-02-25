import express from "express";
import { contactsController } from "/Users/rodolphleblanc/Desktop/contact-app-2025/controllers/contactsController.ts";

const contactRouter = express.Router();

/**
 * GET /api/contact
 */
contactRouter.get("/", contactsController.getContacts);

/**
 * GET /api/contact/:id
 */
contactRouter.get("/:id", contactsController.getContactById);

/**
 * POST /api/contact
 */
contactRouter.post("/", contactsController.createContact);

/**
 * PUT /api/contact/:id
 */
contactRouter.put("/:id", contactsController.updateContact);

/**
 * DELETE /api/contact/:id
 */
contactRouter.delete("/:id", contactsController.deleteContact);

export default contactRouter;
