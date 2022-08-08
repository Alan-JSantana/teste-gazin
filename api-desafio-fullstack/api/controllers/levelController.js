import {
    getLevels,
    getLevelById,
    postLevelPrimary,
    putLevelById,
    deleteLevelById
} from '../service/level/index.js';

export function get_level(req, res, next){
    const { id } = req.query;
    if(!id){
        const db = getLevels();
        res.status(200).json(db);
        return;
    }
    const { code, message } = getLevelById(id);
    res.status(code).json(message);
};

export function post_level(req, res, next){
    const { name } = req.body;
    const { code, message } = postLevelPrimary(name);
    res.status(code).json(message);
};

export function put_level(req, res, next){
    const { id } = req.query;
    const { name } = req.body;
    const { code, message } = putLevelById(id, name);
    res.status(code).json(message);
};

export function delete_level(req, res, next){
    const { id } = req.query;
    const { code, message } = deleteLevelById(id);
    res.status(code).json(message);
};