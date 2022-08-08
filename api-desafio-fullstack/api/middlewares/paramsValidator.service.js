export function paramsValidator(nameParam, param, db){
    const findParams = db.filter((item)=>{
        return item[nameParam] === param;
    })
    if(findParams.length >= 0){
        return true;
    }
    return false;
}