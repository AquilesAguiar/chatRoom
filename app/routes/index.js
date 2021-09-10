
module.exports = function(app){
    app.get('/',function(req,res){
        app.app.controllers.index.login(app,req,res)
    })
}