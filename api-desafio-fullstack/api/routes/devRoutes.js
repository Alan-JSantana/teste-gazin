import express from "express";
import {
    get_devs,
    post_dev,
    put_dev,
    patch_dev,
    delete_dev
} from '../controllers/devController.js'
import {
    getValidator,
    postValidator,
    putValidator,
    patchValidator,
    deleteValidator
} from '../middlewares/devValidator.js'

const routerDev = express.Router();

routerDev.get('/dev', getValidator, get_devs);
routerDev.post('/dev', postValidator, post_dev);
routerDev.put('/dev', putValidator, put_dev);
routerDev.patch('/dev', patchValidator, patch_dev);
routerDev.delete('/dev', deleteValidator, delete_dev);

export default routerDev;