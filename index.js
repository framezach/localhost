var http = require("http");
var PORT = process.argv[2];
var handleRequest = function(req, res) {
    res.end("It works! Path: " + req.url)
};

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    if (PORT == 7000) {
        console.log("You're a 'why' type of person.");
    } else if (PORT == 7500) {
        console.log("You're just not lovable, and you never will be, I guarentee it.");
    }
    console.log("---------------------------------------------");
    console.log("SERvER lIIsTnening ON : http://localhost:5000"); 
});



