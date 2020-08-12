import express from "express";
import HealthController from "../../controllers/HealthController";
import UserController from "../../controllers/UserController";

const router = express.Router();
router.use(new HealthController());
router.use(new UserController());

export default router;
