module.exports = function(app) {

    var clienteController = {

        fetch: function(req, res) {
            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);

            clienteDAO.fetch()
                .then(result => res.json(result).status(200))
                .catch(err => res.json(err))

            connection.end();
        },

        find: function(req, res) {
            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            var id = req.params.id;

            clienteDAO.find(id)
                .then(result => res.json(result).status(200))
                .catch(err => res.json(err))

            connection.end();
        },

        create: function(req, res) {

<<<<<<< HEAD
            req.assert("nome", "Nome é obrigatorio e deve ter 45 caracteres.").notEmpty().len(1, 45);
=======
            req.assert("nome", "Nome é obrigatorio e não deve passar de 45 caracteres.").notEmpty().len(3, 45);
>>>>>>> origin/master
            req.assert("cpf", "CPF é obrigatorio e deve ter 14 caracteres.").notEmpty().len(14, 14);
            req.assert("rg", "RG deve ter 12 caracteres.").len(12, 12);
            req.assert("cep", "cep deve ter 9 caracteres.").len(9, 9);
            req.assert("numero", "O numero precisa ser inteiro.").notEmpty();
            req.assert("uf", "UF deve ter de 2 a 10 caracteres.").len(2, 10);
            req.assert("telefone", "Telefone é obrigatorio e deve ter 15 caracteres.").notEmpty().len(8, 15);
            req.assert("sexo", "Sexo é obrigatorio e deve ter 1 caracter.").notEmpty().len(1, 1);

            var errors = req.validationErrors();

            if (errors) {
                console.log("Erros de validação encontrados");
                res.status(400).send(errors);
                return;
            }

            var cliente = req.body;

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
         
            clienteDAO.create(cliente)
                .then(result => {
                    console.log(result)
                    res.json("O cliente foi adicionado com sucesso!").status(201)
                })
                .catch(err => console.log(err))

            connection.end();
        },
        update: function(req, res) {
            var cliente = {
                id: req.params.id,
                body: req.body
            }

            var connection = app.infra.connectionFactory();
            var clienteDAO = new app.infra.cliente.clienteDAO(connection);
            clienteDAO.update(cliente)
                .then(result => res.json("O cliente foi atualizado com sucesso!").status(200))
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
            clienteDAO.delete(cliente)
                .then(result => res.json("O cliente foi removido com sucesso!").status(204))
                .catch(err => res.json(err))
            
            connection.end();
        }

        
    }

    return clienteController;    
}
