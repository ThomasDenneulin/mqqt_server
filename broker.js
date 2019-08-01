var mosca = require("mosca");
var settings = {
    port : 1515
}

var server = new mosca.server(settings);
server.on("ready",()=>{
    console.log("Ready");
})