const port = 3000;
const io = require("socket.io")(port);

io.on("connect", (socket) => {
  console.log("client connected");

  socket.on("broadcast", (data) => {
    console.log(`${data.sender}: ${data.message}`);
  });

  socket.on("disconnect", (reason) => {
    console.log(`client disconnected ${reason}`);
    console.log(`Number of clients: ${io.server.engine.clientsCount}`);
  });
});

console.log(`server listening on port ${port}`);