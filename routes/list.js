const listRouter = require("express").Router();


const { getList, createList, delete_, updateList } = require("../controllers/list");

  listRouter.get('/', getList);
  listRouter.post('/', createList);
  listRouter.delete("/:id", delete_);
  listRouter.patch("/:id", updateList)




  module.exports = listRouter;