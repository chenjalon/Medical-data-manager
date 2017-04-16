var LinvoDB = require("linvodb3");
LinvoDB.defaults.store = {
	db: require("level-js")
};
LinvoDB.dbPath = "";