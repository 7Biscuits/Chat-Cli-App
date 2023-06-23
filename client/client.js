const io = require("socket.io-client");
const socket = io("http://localhost:3000");
const { rl } = require("../utils/input");

console.log("Connecting to the server...");

var nickname;

socket.on("connect", () => {
  nickname = process.argv[2];
  console.log(`Welcome ${nickname}`);
});

socket.on("disconnect", (reason) => {
  console.log("client disconnected, " + reason);
});

rl.on("line", (input) => {
  socket.emit("broadcast", {
    sender: nickname,
    action: "broadcast",
    message: input,
  });
});

socket.on("broadcast", (data) => {
  console.log(data.message);
});