export function ageValidator(content){
        const age = parseInt(content);
        if(age === NaN){
            return {
                code: 400,
                message: 'Idade não é um número.'
            }
        }
        return age;
}