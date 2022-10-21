const db = require("../database/config");

const execute = async (query) => {
  try {
    const connection = await db();
    const data = await connection.query(query);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error));
    throw error;
  }
};

const findAll = async () => {
  const data = await execute("select * from persona");
   return data[0];
};
const create = async (entity) => {
  const { name, lastname, dni } = entity;
  const data = await execute(
    `insert into persona (nombre, apellido , dni) VALUES ('${name}','${lastname}','${dni}');`
  );
  return data[0];
};
const update = async (id, entity) => {
  const { name, lastname, dni } = entity;
  const data = await execute(
    `UPDATE persona SET nombre = '${name}', apellido = '${lastname}' , dni = '${dni}' WHERE idPersona = '${id}';`
  );
  return data[0];
};
const deleted = async (id) => {
  const data = await execute(
    `DELETE FROM persona WHERE (idPersona = '${id}');`
  );
  return data[0];
};

module.exports = { create, deleted, update, findAll };
