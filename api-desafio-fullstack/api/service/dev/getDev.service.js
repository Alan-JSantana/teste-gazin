import {
    getDev
} from '../../repositories/devRepository.js';
import { paramsValidator } from '../../middlewares/paramsValidator.service.js';

export function getAllDev(){
    const db = getDev();
    return db;
}

export function getDevsByParams(nameParam, param){
    const db = getDev();
    const isParamValid = paramsValidator(nameParam, param, db);
    if(isParamValid){
        const dev = db.filter((dev)=>{
            return dev[nameParam] === param;
        });
        return {
            code: 200,
            message: dev
        };
    }
    return {
        code: 400,
        message: `${nameParam} não encontrado.`
    }
}