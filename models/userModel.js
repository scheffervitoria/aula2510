const db = require('../config/db');

// Modelo para buscar usuário pelo nome de usuário
exports.findByUsername = async (username) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
};
