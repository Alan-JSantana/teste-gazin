import {
    postDev
} from '../../repositories/devRepository.js';
import generatorId from '../../utils/generatorId.js'
import { forenKey } from '../../utils/forenKey.js'

function postDevPrimary(name, level, genre, birthDate, age, hobby){
    const newLevel = level.toLowerCase();
    const idLevel = forenKey(newLevel);
    if(idLevel.code){
        return idLevel;
    }
    const dev = {
        id: generatorId(),
        name,
        level: idLevel,
        genre,
        birthDate,
        age,
        hobby
    }
    if(name.length < 3){
        return {
            code: 400,
            message: 'Nome precisa ter pelo menos 3 letras.'
        }
    }
    postDev(dev);
    return {
        code: 200,
        message: 'Created new developer.'
    };
}

export default postDevPrimary;