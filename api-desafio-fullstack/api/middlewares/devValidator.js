import yup from 'yup';

export async function getValidator(req, res, next){
    const schema = yup.object().shape({
       nameParam: yup.string().matches(
        /id|name|level|genre/i,
        'Parametro não permitido ou encontrado!'
       ),
       param: yup.string('Deve ser string').strict()
    });

    await schema.validate(req.query).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    next();
}

export async function postValidator(req, res, next){
    const schema = yup.object().shape({
        name: yup.string('Nome deve ser uma string.').strict('Nome deve ser uma string.').required('Nome é obrigatório!'), 
        level: yup.string('Level deve ser uma string.').strict('Level deve ser uma string.').required('Level é obrigatório!'),
        genre: yup.string('Genero deve ser uma string.').strict('Genero deve ser uma string.').required('Genero é obrigatório!'),
        birthDate: yup.string('Aniversário deve ser uma data.').strict('Aniversário deve ser uma data.').required('Aniversário é obrigatório!'), 
        age: yup.number('Idade deve ser um número.').strict('Idade deve ser um número.').required('Idade é obrigatório!'), 
        hobby: yup.string('Hobby deve ser uma string.').strict('Hobby deve ser uma string.').required('Hobby é obrigatório!')
    });

    await schema.validate(req.body).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    next();
}

export async function putValidator(req, res, next){
    const schema = yup.object().shape({
        name: yup.string('Nome deve ser uma string.').strict('Nome deve ser uma string.').required('Nome é obrigatório!'), 
        level: yup.string('Level deve ser uma string.').strict('Level deve ser uma string.').required('Level é obrigatório!'),
        genre: yup.string('Genero deve ser uma string.').strict('Genero deve ser uma string.').required('Genero é obrigatório!'),
        birthDate: yup.string('Aniversário deve ser uma data.').strict('Aniversário deve ser uma data.').required('Aniversário é obrigatório!'), 
        age: yup.number('Idade deve ser um número.').strict('Idade deve ser um número.').required('Idade é obrigatório!'), 
        hobby: yup.string('Hobby deve ser uma string.').strict('Hobby deve ser uma string.').required('Hobby é obrigatório!')
    });

    await schema.validate(req.body).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    const schema_2 = yup.object().shape({
       id: yup.string().strict().required('Id é obrigatório')
    });

    await schema_2.validate(req.query).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    next();
}

export async function patchValidator(req, res, next){
    const schema = yup.object().shape({
       nameParam: yup.string().matches(
        /name|level|genre|birthDate|hobby|age/i,
        'Parametro não permitido ou encontrado!'
       ),
       param: yup.string('Parametro deve ser string')
    });

    await schema.validate(req.body).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

     const schema_2 = yup.object().shape({
      id: yup.string().strict().required('Id é obrigatório.')
     });
 
     await schema_2.validate(req.query).catch(err => {
         return res.status(400).json({
           error: err.errors
         })
     });

    next();
}

export async function deleteValidator(req, res, next){
     const schema_2 = yup.object().shape({
      id: yup.string().strict().required('Id é obrigatório.')
     });
 
     await schema_2.validate(req.query).catch(err => {
         return res.status(400).json({
           error: err.errors
         })
     });

    next();
}