import fs from 'fs';
import path from 'path';
import isKey from '../utils/isKey.js';

const pathDb = path.resolve('api', 'db', 'dev_db.json');

//get
export function getDev(){
    const db = fs.readFileSync(pathDb, 'utf-8');
    return JSON.parse(db);
};

//post
export function postDev({ id, name, level, genre, birthDate, age, hobby }){
    const db = getDev();
    const newDb = [
        ...db,
        {   
            id,
            name,
            level,
            genre,
            birthDate,
            age,
            hobby
        }
    ]
    fs.writeFileSync(pathDb, JSON.stringify(newDb));
    return true;
};

//put
export function putDev(id, content){
    const db = getDev();
    db.map((dev)=>{
        if(dev.id === id){
           Object.keys(dev).map((key)=>{
                if(isKey(content, key)){
                    dev[key] = content[key];
                }
           })
        };
    });
    fs.writeFileSync(pathDb, JSON.stringify(db));
    return true;
};

//delete
export function deleteDev(id){
    const db = getDev();
    const newDb = db.filter((dev)=>{
        return dev.id !== id;
    });
    fs.writeFileSync(pathDb, JSON.stringify(newDb));
    return true;
};
