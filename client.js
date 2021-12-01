const net = require('net');
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  let timer = 1000;
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("It's got a sharp tongue, this server!");
    console.log("Successfully connected to game server" );
    conn.write("Name: EZE");
    for (let i = 0; i < timer; i++) {
      timer = Math.random(0.9) * 3000;
      // setInterval(() => {
      conn.write(("move: up"),100);
      conn.write("Name: EZE");
      conn.write("move: down");
      conn.write("Name: EZE");
      conn.write("move: up");
      conn.write("Name: EZE");
      conn.write("move: up");
      conn.write("Name: EZE");
      conn.write("move: left");
      conn.write("Name: EZE");
      conn.write("move: down");
      conn.write("Name: EZE");
      conn.write("move: right");
      conn.write("Name: EZE");
    // }, timer);
  }
  });
  
  return conn;
};

module.exports = connect;