function medidaDAO(connection) {
    
        this._connection = connection;
    
    }

    medidaDAO.prototype.find = function(idUsuario, callback){
        return new Promise((resolve, reject) => {
            var sql_query = `select medida.*, cliente.nome from medida inner join cliente on cliente.idUsuario = medida.idUsuario where medida.idUsuario = ? LIMIT 1`;
            this._connection.query(sql_query,[idUsuario],function(erro, result){
                if(erro){
                    return reject(erro)
                }
                return resolve(result[0])
            })
        })
    }
       
    medidaDAO.prototype.create = function(objeto, callback) {
    
        return new Promise((resolve, reject) => {
            var sql_query = `insert into medida set ?`;
            this._connection.query(sql_query, objeto, function(erro, result) {
                if (erro) {
                    return reject(erro);
                } 
                
               return resolve(result);
            });
        });
    }
    
    medidaDAO.prototype.update = function(objeto, callback) {
        
        return new Promise((resolve, reject) => {
            var sql_query = `update medida set ? where idMedida = ?`;
            this._connection.query(sql_query, [objeto.body, objeto.id], function(erro, result) {
                if (erro) {
                    return reject(erro);
                }
    
                return resolve(result);
            });
        });
    }
    
    medidaDAO.prototype.delete = function(medida, callback) {
    
        return new Promise((resolve, reject) => {
            var sql_query = `delete from medida where idMedida = ?`;
            this._connection.query(sql_query, [medida.body, medida.id], function(erro, result) {
                if (erro) {
                    return reject(erro);
                }
    
                return resolve(result);
            });
        });
    }
        
    module.exports = function() {
        return medidaDAO;
    }