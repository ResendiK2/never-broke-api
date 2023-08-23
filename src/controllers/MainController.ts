import { Request, Response } from "express";

export default {
    //  async index(req: Request, res: Response) {
    //       return res.json(users);
    //  },

    //  async create(req: Request, res: Response) {
    //       const emailService = new EmailService();

    //       emailService.sendMail({

    //            to: {
    //                 name: 'John',
    //                 email: 'john@example.com'
    //            },

    //            message: {
    //                 subject: 'Welcome to system',
    //                 body: 'Welcome!'
    //            }

    //       });

    //       res.send();
    //  }

    async import(req: Request, res: Response) {
        return res.json({ message: "Importing..." });
    }
}