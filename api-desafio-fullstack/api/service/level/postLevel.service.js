import {
    postLevel
} from '../../repositories/levelRepository.js';
import generatorId from '../../utils/generatorId.js';

export function postLevelPrimary(name){
    if(name.length < 4){
        return {
            code: 400,
            message: 'Nome precisa ter pelo menos 5 caracteres.'
        }
    }
    const level = {
        id: generatorId(),
        name: name.toLowerCase()
    };
    postLevel(level);
    return {
        code: 200,
        message: 'Level created.'
    };
};