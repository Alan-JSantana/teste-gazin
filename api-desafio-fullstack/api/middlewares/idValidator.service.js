export function idValidator(id, db){
    const findId = db.filter((item)=>{
        return item.id === id;
    })
    if(findId){
        return true;
    }
    return false;
}

export function idValidatorLevel(id, db){
    const findId = db.filter((item)=>{
        return item.id === id;
    })
    if(findId.length > 0){
        return true;
    }
    return false;
}