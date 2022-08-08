import express from "express";
import {
    get_level,
    post_level,
    put_level,
    delete_level
} from '../controllers/levelController.js';

import {
    getValidator,
    postValidator,
    putValidator,
    deleteValidator
} from '../middlewares/levelValidator.js';

const routerLevel = express.Router();

routerLevel.get('/level', getValidator, get_level);
routerLevel.post('/level', postValidator, post_level);
routerLevel.put('/level', putValidator, put_level);
routerLevel.delete('/level', deleteValidator, delete_level);

export default routerLevel;