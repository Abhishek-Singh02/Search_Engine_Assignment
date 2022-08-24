const controller = require("../controller/controller");

//Get Ad Data
app.post("/api/search", controller.get_Ads);
