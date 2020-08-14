import express from 'express';
import pages from "./pages";
import auth from "./auth";
import api from "./api";

const router = express.Router();

router.use(pages);
router.use(auth);
router.use("/api", api);

export default router;
