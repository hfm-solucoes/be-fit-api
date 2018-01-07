module.exports = function(app) {

    var loginController = {

        fetch: function(req, res) {
            var connection = app.infra.connectionFactory();
            var loginDAO = new app.infra.cliente.loginDAO(connection);

            loginDAO.fetch()
                .then(result => res.json(result).status(200))
                .catch(err => res.json(err).status(500))

            connection.end();
        },

        find: function(req, res) {
            var connection = app.infra.connectionFactory();
            var loginDAO = new app.infra.cliente.loginDAO(connection);
            var id = req.params.id;

            loginDAO.find(id)
                .then(result => res.json(result).status(200))
                .catch(err => res.json(err).status(500))

            connection.end();
        },

        create: function(req, res) {
            var login = req.body;

            var connection = app.infra.connectionFactory();
            var loginDAO = new app.infra.cliente.loginDAO(connection);
         
            loginDAO.create(login)
                .then(result => {
                    res.json(result.insertId).status(201)
                })
                .catch(err => {
                    res.status(500).send(err.sqlMessage)
                    console.log(err)
                })

            connection.end();
        },
        update: function(req, res) {
            var login = {
                id: req.params.id,
                body: req.body
            }

            var connection = app.infra.connectionFactory();
            var loginDAO = new app.infra.cliente.loginDAO(connection);
            loginDAO.update(login)
                .then(result => res.json("O login foi atualizado com sucesso!").status(200))
                .catch(err => res.json(err).status(500))
            
            connection.end(); 
        },
        delete: function(req, res) {
            var login = {
                id: req.params.idUsuario,
                body: req.body
            }
            console.log()

            var connection = app.infra.connectionFactory();
            var loginDAO = new app.infra.cliente.loginDAO(connection);
            loginDAO.delete(login)
                .then(result => res.json("O login foi removido com sucesso!").status(204))
                .catch(err => res.json(err))
            
            connection.end();
        }

        
    }

    return loginController;    
}
