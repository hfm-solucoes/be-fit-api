module.exports = function(app) {

    var clienteController = {

        create: function(req, res) {
            var cliente = req.body;

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            clienteDAO.save(cliente)
                .then(result => res.json("O cliente foi adicionado com sucesso!").status(200))
                .catch(err => res.json(err))

            connection.end();
        }
    }

    return clienteController;    
}