module.exports = function(app) {

    var clienteController = {

        fetch: function(req, res) {
            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);

            clienteDAO.lista()
                .then(result => res.json(result).status(200))
                .catch(err => res.json(err))

            connection.end();
        },
        create: function(req, res) {
            var cliente = req.body;

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            clienteDAO.save(cliente)
                .then(result => res.json("O cliente foi adicionado com sucesso!").status(201))
                .catch(err => res.json(err))

            connection.end();
        },
        update: function(req, res) {
            var cliente = {
                id: req.params.id,
                body: req.body
            }

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            clienteDAO.atualiza(cliente)
                .then(result => res.json("O cliente foi atualizado com sucesso!").status(201))
                .catch(err => res.json(err))
            
            connection.end(); 
        },
        delete: function(req, res) {
            var cliente = {
                id: req.params.id,
                body: req.body
            }

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            clienteDAO.remove(cliente)
                .then(result => res.json("O cliente foi removido com sucesso!").status(204))
                .catch(err => res.json(err))
        }

        
    }

    return clienteController;    
}