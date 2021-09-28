const FormUserController = require("../controller/FormUserController");
module.exports = async (app) => {
  app.post("/createFormUser", async (req, res) => {
    let FormMethod = req.body;
    res.send(await FormUserController.createUserForm(FormMethod));
  });
};