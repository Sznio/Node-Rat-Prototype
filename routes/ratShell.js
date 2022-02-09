var express = require("express");
var router = express.Router();
const { spawn } = require("child_process");
/* GET home page. */

router.post("/", function (req, res) {
      const { shellCode } = req.body;
      console.log(shellCode.length);
      if (shellCode.length == 0) {
            res.send(400);
            return;
      }
      const child = spawn(shellCode, {
            shell: true,
      });
      child.stdin.write(shellCode);
      let dataStr = "";
      child.stdout.on("data", (data) => {
            dataStr += data;
      });
      child.stdout.on("close", () => {
            dataStr = dataStr.toString();
            console.log(dataStr);
            dataArr = dataStr.split("\n");

            res.json(JSON.stringify({ data: dataArr }));
      });
});

module.exports = router;
