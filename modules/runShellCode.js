const { spawn } = require("child_process");

const runShellCode = (shellCode) => {
      const child = spawn(shellCode);

      child.stdout.on("data", (data) => {
            console.log(data);
      });
};

process.stdin.on("data", (data) => {
      runShellCode(data);
});
