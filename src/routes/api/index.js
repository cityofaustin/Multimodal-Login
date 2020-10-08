import express from "express";
import HealthController from "../../controllers/HealthController";
import UserController from "../../controllers/UserController";
import socialLogin from "./social-login";
import faceMicrosoft from "./face-microsoft";
import AppSettingController from "../../controllers/AppSettingController";
import LoginMethodController from "../../controllers/LoginMethodController";

const router = express.Router();
// For healthchecks, making sure the server is running
router.use(new HealthController());
router.use(new UserController());
router.use(new AppSettingController());
router.use(new LoginMethodController());
router.use(socialLogin);
router.use(faceMicrosoft);

export default router;

// import StringUtil from '../util/StringUtil';
// import path from 'path';
// import fs from 'fs';
// import { ConnectionStates } from 'mongoose';
// const smsUtil = require('../common/smsUtil');
