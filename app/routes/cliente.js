module.exports = function(app) {

    var cliente = app.controllers.cliente;

    app.post('/v1/cliente', cliente.create)

}