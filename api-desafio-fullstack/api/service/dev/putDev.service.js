import {
    putDev,
    getDev
} from '../../repositories/devRepository.js';
import { idValidator } from '../../middlewares/idValidator.service.js';
import { forenKey } from '../../utils/forenKey.js';

function putDevParam(id, content){
    const db = getDev();
    const isIdValid = idValidator(id, db);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    if(content.level){
        content.level = content.level.toLowerCase();
        const idLevel = forenKey(content.level);
        if(idLevel.code){
            return idLevel;
        }
        content.level = idLevel;
    }
    putDev(id, content);
    return {
        code: 200,
        message: 'Developer update sucess.'
    };
}

export default putDevParam;