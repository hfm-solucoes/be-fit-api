function clienteDAO(connection) {

    this._connection = connection;

}

clienteDAO.prototype.save = function(objeto, callback) {

    return new Promise((resolve, reject) => {
        var sql_query = `insert into cliente set ?`;
        this._connection.query(sql_query, objeto, function(erro, result) {
            if (erro) {
                return reject(erro);
            } 
            
           return resolve(result);
        });
    });
}

clienteDAO.prototype.lista = function(callback) {
    
    return new Promise((resolve, reject) => {
        var sql_query = `select * from cliente where deletado = 0`;
        this._connection.query(sql_query, function(erro, result) {
            if (erro) {
                return reject(erro);
            }

            return resolve(result);
        });
    });
}

clienteDAO.prototype.atualiza = function(objeto, callback) {
    
    return new Promise((resolve, reject) => {
        var sql_query = `update cliente set ? where idUsuario = ?`;
        this._connection.query(sql_query, [objeto.body, objeto.id], function(erro, result) {
            if (erro) {
                return reject(erro);
            }

            return resolve(result);
        });
    });
}

clienteDAO.prototype.remove = function(cliente, callback) {

    return new Promise((resolve, reject) => {
        var sql_query = `update cliente set ? where idUsuario = ?`;
        this._connection.query(sql_query, [cliente.body, cliente.id], function(erro, result) {
            if (erro) {
                return reject(erro);
            }

            return resolve(result);
        });
    });
}


module.exports = function() {
    return clienteDAO;
}