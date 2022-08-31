'use strict';

var mobiwork = require("./mobiwork.js");
var server = new mobiwork({
    name: "UNEP",
    port: "1998",
    mongodb: "27098"
});

server.run(); 