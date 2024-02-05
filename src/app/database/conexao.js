import mysql from "mysql";

const config = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "14102023",
  database: "bdcopa",
};

const conexao = mysql.createConnection(config);

conexao.connect();

export default conexao;
