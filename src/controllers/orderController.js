const Orders = require('../models/orders');

exports.crearOrden = (req, res) => {
    const {address, amount} = req.body;
    const { uid } = req.user;

    Orders.crear(uid, address, amount, (err, results) => {
        if (err) {
            console.error('Error creando el registro:', err);
            res.status(500).send('Error al crear el registro');
            return;
          }
          res.redirect('/')
    })
}
exports.leerNombre = (req, res) => {
    const { uid } = req.user;
    Orders.leerNombre(uid, (err, results) => {
        if (err) {
            console.error('Error leyendo los registros:', err);
            res.status(500).send('Error al leer los registros');
            return;
        }
        res.status(200).json(results)
    })
}
exports.leerOrders = (req, res) => {
    const { uid } = req.user;
    Orders.leerTodos(uid, (err, results) => {
        if (err) {
            console.error('Error leyendo los registros:', err);
            res.status(500).send('Error al leer los registros');
            return;
        }
        res.status(200).json(results);
    })
}