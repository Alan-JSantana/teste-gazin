import {
    deleteDev,
    getDev
} from '../../repositories/devRepository.js';
import { idValidator } from '../../middlewares/idValidator.service.js';

function deleteById(id){
    const db = getDev();
    const isIdValid = idValidator(id, db);
    if(!isIdValid){
        return {
            code: 400,
            message: 'Id não encontrado.'
        }
    }
    deleteDev(id);
    return {
        code: 200,
        message: 'Developer deleted sucess.'
    };
}

export default deleteById;