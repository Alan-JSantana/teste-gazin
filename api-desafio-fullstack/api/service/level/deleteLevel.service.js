import {
    deleteLevel,
    getLevel
} from '../../repositories/levelRepository.js';
import { idValidatorLevel } from '../../middlewares/idValidator.service.js';
import { getDev } from '../../repositories/devRepository.js';

export function deleteLevelById(id){
    const db = getLevel();
    const isIdValid = idValidatorLevel(id, db);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    const devs =  getDev();
    const devsLevelActual = devs.filter((dev)=>{
        return dev.level.id === id;
    });
    if(devsLevelActual.length > 0){
        return {
            code: 400,
            message: "Level conected with developers. Not deleted." 
        }
    }
    deleteLevel(id);
    return {
        code: 200,
        message: 'Level deleted.'
    };
};