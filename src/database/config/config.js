require("dotenv").config();
//const { DATABASE_URL } = process.env;
//const { DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

// las constantes del .env son:
DB_USERNAME="postgres"
DB_PASSWORD="admin"
DB_NAME="CursoNodeJSFinal"
//DATABASE_URL="postgres://postgres:admin@127.0.0.1/CursoNodeJSFinal"

module.exports = {
  development: {
    // url: DATABASE_URL,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    //username: "root",
    //password: null,
    //database: "database_production",
    //host: "127.0.0.1",
    url: "postgres://delctejateqxkh:16098776a781217bcd4bbdd22d6bf8d20d02387af62e24a4144c388bb73d5a62@ec2-54-156-60-12.compute-1.amazonaws.com:5432/d23p7mvsallgsr",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }
};

/* module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        required: true,
        rejectUnauthorized: false,
      },
    },
  }
};
*/