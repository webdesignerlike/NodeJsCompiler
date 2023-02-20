var express = require('express');
var router = express.Router();
const { v4 } = require("uuid");
var appRoot = require("app-root-path");
var fs = require("fs")
const execSh = require("exec-sh");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/api/code", (req, res) => {
  const content = req.body.data;
  

  var filename =  req.body.filename ?? `${appRoot}\\files\\${v4()}.js`;
 
console.log("filename",filename)
  fs.writeFile(filename, content, function (err) {
    if (err) {
      // return console.error(err);
      // return JSON.parse(error);
    }
    console.log(filename);
  });



  const child = execSh(["node  " + filename], true, (err, stdout, stderr) => {
    console.log("error: ", err);
    if (stderr) {
      res.send({result:stderr,filename});
    }
    if (stdout) {
      res.send({result:stdout,filename});
      // res.send(stdout);
    }
    console.log("stdout:\n ", stdout);
    console.log("stderr: ", stderr);
  });
});

module.exports = router;
