function loginDAO(connection) {

    this._connection = connection;

}

loginDAO.prototype.fetch = function(callback) {
    
    return new Promise((resolve, reject) => {
        var sql_query = `select * from login`;
        this._connection.query(sql_query, function(erro, result) {
            if (erro) {
                return reject(erro);
            }
            return resolve(result);
        });
    });
}

loginDAO.prototype.create = function(objeto, callback) {

    return new Promise((resolve, reject) => {
        var sql_query = `insert into login set ?`;
        this._connection.query(sql_query, objeto, function(erro, result) {
            if (erro) {
                return reject(erro);
            } 
            return resolve(result);
        });
    });
}

loginDAO.prototype.update = function(objeto, callback) {
    
    return new Promise((resolve, reject) => {
        var sql_query = `update login set ? where idUsuario = ?`;
        this._connection.query(sql_query, [objeto.body, objeto.id], function(erro, result) {
            if (erro) {
                return reject(erro);
            }
            return resolve(result);
        });
    });
}

loginDAO.prototype.delete = function(id, callback) {

    return new Promise((resolve, reject) => {
        var sql_query = `update login set delete = '*' where idUsuario = ?`;
        this._connection.query(sql_query, [id], function(erro, result) {
            if (erro) {
                return reject(erro);
            }
            return resolve(result);
        });
    });
}

loginDAO.prototype.find = function(id, callback){
    return new Promise((resolve, reject) => {
        var sql_query = `select * from login where idUsuario = ? LIMIT 1`;
        this._connection.query(sql_query,[id],function(erro, result){
            if(erro){
                return reject(erro);
            }
            return resolve(result[0])
        })
    })
}

module.exports = function() {
    return loginDAO;
}