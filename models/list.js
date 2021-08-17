const db = require("../db");

//GET ALL
const find = async () => {
    return db.promise().query("SELECT * from list");
};

//POST
const create = async ({name}) => {
    return db
    .promise()
    .query("INSERT INTO list (name) VALUES (?)", [
        name,
    ]);
};

//DELETE
const delete_ = async (id) => {
    return db
      .promise()
      .query("DELETE from list WHERE id =?" , [id]);
  };

//PATCH
const update = async (id, name, check) => {
    return db
      .promise()
      .query("UPDATE list SET ? WHERE id=?", [
        name,
        id,
      ]);
  };

module.exports = {find, create, delete_, update};