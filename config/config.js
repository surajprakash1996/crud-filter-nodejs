const port = process.env.PORT || 3002;
const connection = {};


/** Database connection  */ 
connection.dbName = process.env.DB_NAME;
connection.dbUser = process.env.DB_USER;
connection.dbPass = process.env.DB_PASS;
connection.dbDialact = process.env.DB_DIALACT;


module.exports = {
    port,
    connection
};
