require('dotenv').config();
const express = require('express');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const path = require('path');
const authRoutes = require('./routes/authRoutes');

const app = express();
const db = require('./config/db');

// Configuração do parser de corpo (body parser)
app.use(express.urlencoded({ extended: false }));

// Configuração de sessões com armazenamento no MySQL
app.use(session({
    secret: 'chave-secreta',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({}, db)
}));

// Configuração da pasta de visualizações e EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas de autenticação
app.use(authRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
