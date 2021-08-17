const listRouter = require("./list");



module.exports = (app) => {
  app.use("/list", listRouter);

};
