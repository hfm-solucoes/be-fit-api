module.exports = function(app) {
    
        var medidaController = {
    
            find: function(req, res) {
                var connection = app.infra.connectionFactory();
                var medidaDAO = new app.infra.cliente.medidaDAO(connection);
                
                var idUsuario = req.params.id;
                medidaDAO.find(idUsuario)
                    .then(result => res.json(result).status(200))
                    .catch(err => res.json(err))
    
                connection.end();
            },
    
            create: function(req, res) {    
                var medida = req.body;
    
                var connection = app.infra.connectionFactory();
                var medidaDAO = new app.infra.cliente.medidaDAO(connection);
             
                medidaDAO.create(medida)
                    .then(result => {
                        console.log(result)
                        res.json("Foi Adicionado com sucesso as medidas para o usuario.").status(201)
                    })
                    .catch(err => console.log(err))
    
                connection.end();
            },
            update: function(req, res) {
                var medida = {
                    id: req.params.id,
                    body: req.body
                }
    
                var connection = app.infra.connectionFactory();
                var medidaDAO = new app.infra.cliente.medidaDAO(connection);
                medidaDAO.update(medida)
                    .then(result => res.json("A medida do usuário foi atualizada com sucesso!").status(200))
                    .catch(err => res.json(err))
                
                connection.end(); 
            },
            delete: function(req, res) {
                var medida = {
                    id: req.params.id,
                    body: req.body
                }
    
                var connection = app.infra.connectionFactory();
                var medidaDAO = new app.infra.cliente.medidaDAO(connection);
                medidaDAO.delete(medida)
                    .then(result => res.json("A medida do usuario foi removida com sucesso!").status(204))
                    .catch(err => res.json(err))
                
                connection.end();
            }
    
            
        }
    
        return medidaController;    
    }
    
