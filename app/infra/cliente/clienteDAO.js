function clienteDAO(connection) {

    this._connection = connection;

}

clienteDAO.prototype.fetch = function(callback) {
    
    return new Promise((resolve, reject) => {
        var sql_query = `
            select
                idUsuario,
                nome,
                DATE_FORMAT(dtNasc, '%d/%l/%Y') as dtNasc,
                cpf,
                rg,
                cep,
                endereco,
                numero,
                bairro,
                cidade,
                uf,
                telefone,
                sexo
            from 
                cliente`;
        this._connection.query(sql_query, function(erro, result) {
            if (erro) {
                return reject(erro);
            }

            return resolve(result);
        });
    });
}

clienteDAO.prototype.create = function(objeto, callback) {

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

clienteDAO.prototype.update = function(objeto, callback) {
    
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

clienteDAO.prototype.delete = function(cliente, callback) {

    return new Promise((resolve, reject) => {
        var sql_query = `delete from cliente where idUsuario = ?`;
        this._connection.query(sql_query, [cliente.id], function(erro, result) {
            if (erro) {
                return reject(erro);
            }
            return resolve(result);
        });
    });
}

clienteDAO.prototype.find = function(id, callback){
    return new Promise((resolve, reject) => {
        var sql_query = `select * from cliente where idUsuario = ? LIMIT 1`;
        this._connection.query(sql_query,[id],function(erro, result){
            if(erro){
                return reject(erro);
            }
            return resolve(result[0])
        })
    })
}

module.exports = function() {
    return clienteDAO;
}