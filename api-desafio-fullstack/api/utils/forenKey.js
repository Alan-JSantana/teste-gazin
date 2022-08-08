import { getLevels } from '../service/level/getLevel.service.js';

export function forenKey(level, id){
    const levels = getLevels();
    if(!level){
        level = levels.find((item)=>{
            return item.id === id;
        })
        return level;
    }

    if(!id){
        let result = levels.find((item)=>{
            return item.name === level;
        })
        if(!result){
            return {
                code: 400,
                message: 'Nível não encontrado!' 
            };
        }
        return result;
    }
}