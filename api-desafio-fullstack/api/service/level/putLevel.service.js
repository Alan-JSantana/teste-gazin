import {
    putLevel,
    getLevel
} from '../../repositories/levelRepository.js';
import { idValidatorLevel } from '../../middlewares/idValidator.service.js';

export function putLevelById(id, name){
    const db = getLevel();
    const isIdValid = idValidatorLevel(id, db);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    name = name.toLowerCase();
    putLevel(id, name);
    return {
        code: 200,
        message: 'Level updated.'
    };
};