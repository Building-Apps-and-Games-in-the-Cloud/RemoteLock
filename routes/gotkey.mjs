import express from 'express';
import { lockControl } from '../remotelock.mjs';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/',  (request, response) => {

  let key = request.body.key;
  if (key == "sesame"){
    lockControl.open();
  }
  response.redirect('/index.html');
});

export { router as gotkey };
 