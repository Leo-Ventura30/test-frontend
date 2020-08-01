//server configuration file
const app = require("./server");

//listen port server
app.listen(process.env.PORT || 8080);
