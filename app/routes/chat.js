var validacoes  = require("../controllers/chat").validacoes()
module.exports = function(app){
    app.post("/chat",validacoes,function(req, res){
        app.app.controllers.chat.conversas(app,req, res)
    })
    app.get("/chat",function(req, res){
        app.app.controllers.chat.conversas(app,req, res)
    })
}