const connection = require('../config/db');

class Orders {
    static crear(uid, address, quantity, callback) {
        const query = 'INSERT INTO orders (user_id, address, quantity) VALUES (?, ?, ?)';
        connection.query(query, [uid, address, quantity], callback);
    }
    static leerNombre(uid, callback) {
        const query = 'SELECT name FROM users WHERE id = ?';
        connection.query(query,[uid], callback);
    }
    static leerTodos(uid, callback) {
        const query = 'SELECT * FROM orders WHERE user_id = ?';
        connection.query(query, [uid], callback);
      }
}

module.exports = Orders;