// Add the bistro user
var users = require("@arangodb/users");
users.update("root", process.env.ARANGO_DB_ROOT_PASSWORD);
users.save(process.env.ARANGO_DB_USER, process.env.ARANGO_DB_PASSWORD, true);

// Create database and grant access for the bistro user
db._createDatabase(process.env.ARANGO_DB_NAME);
db._useDatabase(process.env.ARANGO_DB_NAME);
users.grantDatabase(process.env.ARANGO_DB_USER, process.env.ARANGO_DB_NAME, 'rw');


// Create menu collection and grant access for the bistro user
db._create('menus');
users.grantCollection(process.env.ARANGO_DB_USER, process.env.ARANGO_DB_NAME, 'menus', 'rw');

// Create job collection and grant access for the bistro user
db._create('jobs');
users.grantCollection(process.env.ARANGO_DB_USER, process.env.ARANGO_DB_NAME, 'jobs', 'rw');
