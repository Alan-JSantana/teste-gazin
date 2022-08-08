import fs from 'fs';
import path from 'path';

const pathDb = path.resolve('api', 'db', 'level_db.json');

export function getLevel(){
    const db = fs.readFileSync(pathDb, 'utf-8');
    return JSON.parse(db);
}

export function postLevel({ id, name }){
    const db = getLevel();
    const newDb = [
        ...db,
        {   
            id,
            name
        }
    ]
    fs.writeFileSync(pathDb, JSON.stringify(newDb));
    return true;
};

export function putLevel(id, name){
    const db = getLevel();
    db.map((level)=>{
        if(level.id === id){
            level.name = name;
        };
    });
    fs.writeFileSync(pathDb, JSON.stringify(db));
    return true;
};

export function deleteLevel(id){
    const db = getLevel();
    const newDb = db.filter((level)=>{
        return level.id !== id;
    });
    fs.writeFileSync(pathDb, JSON.stringify(newDb));
    return true;
};