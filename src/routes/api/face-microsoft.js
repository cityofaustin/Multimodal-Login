import express from "express";
import CognitiveFaceService from '../../services/CognitiveFaceService';

const router = express.Router();

router.post('/verify/face', async (req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: 'Must include a file to upload.',
    });
    return;
  }
  const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.verifyFaceToUsername(
    dataBuffer,
    req.body.username
  );
  return res.json({ registerFaceResponse: response });
});

router.post('/register/face', async (req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: 'Must include a file to upload.',
    });
    return;
  }
  const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.registerFaceToUsername(
    dataBuffer,
    req.body.username
  );
  return res.json({ registerFaceResponse: response });
});

export default router;
