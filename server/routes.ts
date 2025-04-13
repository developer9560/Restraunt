import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema, insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle reservation submissions
  app.post("/api/reservations", async (req: Request, res: Response) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      return res.status(201).json({ 
        success: true, 
        message: "Reservation received successfully!",
        data: reservation 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your reservation."
      });
    }
  });

  // Handle contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      return res.status(201).json({ 
        success: true, 
        message: "Message received successfully!",
        data: contact 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.details
        });
      }
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your message."
      });
    }
  });

  // Get all reservations (for admin purposes)
  app.get("/api/reservations", async (req: Request, res: Response) => {
    try {
      const reservations = await storage.getAllReservations();
      return res.status(200).json({ reservations });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching reservations."
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      return res.status(200).json({ contacts });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while fetching contact submissions."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
