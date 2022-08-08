import {
    getLevel
} from '../../repositories/levelRepository.js';
import { idValidatorLevel } from '../../middlewares/idValidator.service.js';
import { getDev } from '../../repositories/devRepository.js';

export function getLevels(){
    const levels = getLevel();
    return levels;
};

export function getLevelById(id){
    const levels = getLevel();
    const isIdValid = idValidatorLevel(id, levels);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    const level = levels.find((level)=>{
        return level.id === id;
    })
    const devs = getDev();
    const devsLevelActual = devs.filter((dev)=>{
        return dev.level.id === id;
    });
    return {
        code: 200,
        message: {
            ...level,
            developers: devsLevelActual.length
        }
    };
};