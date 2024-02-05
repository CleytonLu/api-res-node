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

export const consult = (sql, paramsValue = "", messageReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, paramsValue, (error, result) => {
      if (error) return reject({ message: messageReject });

      const row = JSON.parse(JSON.stringify(result));

      return resolve(row);
    });
  });
};

export default conexao;
