module.exports = function(app) {

    var cliente = app.controllers.cliente;

    app.get('/v1/cliente', cliente.fetch);
    app.get('/v1/cliente/:id', cliente.find);
    app.post('/v1/cliente', cliente.create);
    app.put('/v1/cliente/:id', cliente.update);
    app.delete('/v1/cliente/:id', cliente.delete);

}