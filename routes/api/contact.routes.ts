import express from "express";
import { contactController } from "../../controllers/contact.controller";

const contactRouter = express.Router();

/**
 * GET /api/contact
 */
contactRouter.get("/", contactController.getContacts);

/**
 * GET /api/contact/:id
 */
contactRouter.get("/:id", contactController.getContactById);

/**
 * POST /api/contact
 */
contactRouter.post("/", contactController.createContact);

/**
 * PUT /api/contact/:id
 */
contactRouter.put("/:id", contactController.updateContact);

/**
 * DELETE /api/contact/:id
 */
contactRouter.delete("/:id", contactController.deleteContact);

export default contactRouter;
