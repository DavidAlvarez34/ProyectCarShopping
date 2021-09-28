const FormController = require("../controller/FormController");
module.exports = async (app) => {
  app.post("/createFormMethod", async (req, res) => {
    let FormMethod = req.body;
    res.send(await FormController.createMethod(FormMethod));
  });
};
