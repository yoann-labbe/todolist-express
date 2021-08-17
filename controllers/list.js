const { find, create, delete_: deleteModel, update } = require("../models/list");


const getList = async (req, res) => {
    const [data] = await find(req.params.id);
    res.json(data);
  };
  
  const createList = async (req, res) => {
    try {
      await create(req.body);
      res.status(201).send("tâche créé");
    } catch (error) {
      console.log(error);
      res.status(500).send("error tâche");
    }
  };

  const delete_ = async (req, res) => {
    try {
      await deleteModel(req.params.id);
      res.status(204).send("tâche supprimé ");
    } catch (error) {
      console.log(error);
      res.status(500).send("error suppression tâche");
    }
  };

  const updateList = async (req, res) => {
    try {
      await update(req.params.id, req.body, );
      res.status(200).send("tâche modifié ");
    } catch (error) {
      console.log(error);
      res.status(404).send("error de modification");
    }
  };

  module.exports = { getList, createList, delete_, updateList };