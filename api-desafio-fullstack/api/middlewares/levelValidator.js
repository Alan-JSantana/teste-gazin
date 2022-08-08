import yup from 'yup';

export async function getValidator(req, res, next){
    const schema = yup.object().shape({
        id: yup.string().strict()
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
        name: yup.string('Nome dever ser uma string.').strict('Nome dever ser uma string.').required('Nome é obrigatório.')
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
        id: yup.string().strict().required('Id é obrigatório.')
    });

    await schema.validate(req.query).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    const schema_2 = yup.object().shape({
        name: yup.string('Nome dever ser uma string.').strict('Nome dever ser uma string.').required('Nome é obrigatório.')
    });

    await schema_2.validate(req.body).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    next();
}

export async function deleteValidator(req, res, next){
    const schema = yup.object().shape({
        id: yup.string().strict().required('Id é obrigatório.')
    });

    await schema.validate(req.query).catch(err => {
        return res.status(400).json({
          error: err.errors
        })
    });

    next();
}