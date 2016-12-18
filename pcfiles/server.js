'use strict'

const http = require('http');
const fs = require('fs');
const url = require('url');
const os = require('os');
const ifaces = os.networkInterfaces();
var spawn = require('child_process').spawn;
var child = spawn('Project1.exe');

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    ++alias;
  });
});

let buttonState = {
    u: 0,
    o: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    q: 0,
    w: 0,
    e: 0,
    a: 0,
    s: 0,
    d: 0,
    z: 0,
    c: 0,
}

	
let buttonBuffer = JSON.stringify(buttonState);

const server = http.createServer(function(req,res) {

    const method = req.method;
    const url = req.url;

    fs.readFile('./public' + url, function(err,data)
    {
        if(err) {
            res.statusCode = 404;
            res.end("The file isn't found")
        }
        else{
            res.statusCode = 200;
            res.end(data);
        }
    });

    if(req.url.indexOf("btn") >= 0)
	
        if(method === "POST"){

            let btnData = '';
            req.on('data',function(chunk){
                btnData = btnData + chunk;
                if(btnData.length >= 1e6){
                    request.connection.destroy();
                }
            })

            req.on('end',function(){
				
                let parsedData = JSON.parse(btnData);
		fs.writeFileSync("buttonState.txt",btnData);
		console.log(btnData);
                res.setHeader('Content-Type','application/json');
                return res.end("Received");
            })
        }
});

server.listen(3001)