import express from 'express';

var router = express.Router();

import { GetFunc, PostFunc } from '../controllers/{{sample}}Controller.js';
import { GetFunc as GetFuncmiddleware } from '../middlewares/{{sample}}middleware.js';

router.get('/', GetFunc);
router.post('/', GetFuncmiddleware, PostFunc);

export { router };