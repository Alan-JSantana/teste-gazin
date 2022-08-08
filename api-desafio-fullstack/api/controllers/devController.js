import {
    deleteById,
    getAllDev,
    getDevsByParams,
    patchDevParam,
    postDevPrimary,
    putDevParam
} from '../service/dev/index.js';

export function get_devs(req, res, next){
    const { nameParam, param } = req.query;
    if(!nameParam || !param){
        const devs = getAllDev();
        res.status(200).json(devs);
        return;
    }
    const { code, message } = getDevsByParams(nameParam, param);
    res.status(code).json(message);
};

export function post_dev(req, res, next){
    const {
        name, 
        level, 
        genre, 
        birthDate, 
        age, 
        hobby
    } = req.body;
    const { code, message } = postDevPrimary(name, level, genre, birthDate, age, hobby);
    res.status(code).json(message);
};

export function put_dev(req, res, next){
    const { id } = req.query;
    const {
        name, 
        level, 
        genre, 
        birthDate, 
        age, 
        hobby
    } = req.body;
    const { code, message } = putDevParam(id, {
        name, 
        level, 
        genre, 
        birthDate, 
        age, 
        hobby
    });
    res.status(code).json(message);
};

export function patch_dev(req, res, next){
    const { id } = req.query;
    const { nameParam, param } = req.body;
    const { code, message } = patchDevParam(id, nameParam, param);
    res.status(code).json(message);
};

export function delete_dev(req, res, next){
    const { id } = req.query;
    const { code, message } = deleteById(id);
    res.status(code).json(message);
};