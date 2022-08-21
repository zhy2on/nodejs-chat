const WebSocket = require("ws");
const ws = new WebSocket.Server({ port:8008 });

ws.on("connection", function connect(ws, req) { // 웹소켓에 특정 클라이언트가 연결되었을 때 실행
	console.log("NEW USER CONNECT");
});