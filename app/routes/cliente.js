module.exports = function(app) {

    var cliente = app.controllers.cliente;

    app.get('/v1/cliente', cliente.fetch);
    app.get('/v1/cliente/:id', cliente.find);
    app.post('/v1/cliente', cliente.create);
    app.put('/v1/cliente/:id', cliente.update);
    app.delete('/v1/cliente/:id', cliente.delete);

    // Rotas do login
    var login = app.controllers.login;
    app.get('/v1/login', login.fetch);
    app.get('/v1/login/:id', login.find);
    app.post('/v1/login', login.create);
    app.put('/v1/login/:id', login.update);
    app.delete('/v1/login/:id', login.delete);

    // Rotas das medidas de um cliente
    var medida = app.controllers.medida;
    
    app.get('/v1/medida/:id', medida.find);
    app.post('/v1/medida', medida.create);
    app.put('/v1/medida/:id', medida.update);
    app.delete('/v1/medida/:id', medida.delete);

}