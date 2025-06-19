import { Router } from "express";
import { RatController } from "../controller/ratcontroller";


const ratRouter = Router();
const ratController = new RatController()

ratRouter.get("/razaocnpj", ratController.getCnpjAndRazao.bind(ratController))

export default ratRouter