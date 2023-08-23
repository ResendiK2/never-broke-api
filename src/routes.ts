import { Router } from "express";
import MainController from "./controllers/MainController";

const routes = Router();

routes.get('/import', MainController.import);

export default routes;