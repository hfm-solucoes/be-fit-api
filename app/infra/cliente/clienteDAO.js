function clienteDAO(connection) {

    this._connection = connection;

}

clienteDAO.prototype.save = function(objeto, callback) {

    return new Promise((resolve, reject) => {
        const sql_query = `insert into cliente set ?`;
        this._connection.query(sql_query, objeto, function(erro, result) {
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