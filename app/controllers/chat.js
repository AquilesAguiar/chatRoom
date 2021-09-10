const { check, validationResult } = require('express-validator');

module.exports.validacoes = function(){
    return[
        check('apelido','Apelido obrigatório').notEmpty(),
        check('apelido','Apelido deve ter entre 3 a 15 caracteres').isLength({min:3,max:15}),
    ]
}
module.exports.conversas = function(app,req, res){
    let dados = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.render("index",{error:errors['errors']})
    }
    app.get('io').emit('msgParaCliente',
        {apelido:dados.apelido,mensagem:"Acabou de entrar no chat"}
    )
    return res.render("chat",{dados:dados})
}