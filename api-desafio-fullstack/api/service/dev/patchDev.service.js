import {
    putDev,
    getDev
} from '../../repositories/devRepository.js';
import { ageValidator } from '../../middlewares/ageValidator.service.js';
import { idValidator } from '../../middlewares/idValidator.service.js';
import { forenKey } from '../../utils/forenKey.js';

function patchDevParam(id, nameParam, param){
    const db = getDev();
    const isIdValid = idValidator(id, db);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    (nameParam === 'age') ? param = ageValidator(param): -1;
    if(param.code){
        return param;
    }
    const content = {};
    content[nameParam] = param;
    if(nameParam === 'level'){
        param = param.toLowerCase();
        const idLevel = forenKey(param);
        if(idLevel.code){
            return idLevel;
        }
        param = idLevel;
    }
    putDev(id, content);
    return {
        code: 200,
        message: 'Developer updated.'
    };
}

export default patchDevParam;