import io from "socket.io-client";

const socket = io("http://localhost:8080");

export const initializeSocket = () => {
    socket.on("connect", () => {
        console.log("Connected to WebSocket server");
    });

    socket.on("message", (data) => {
        console.log("Received notification:", data);
        alert(`New Notification: ${data}`);
    });
};

export const sendMessage = (message) => {
    socket.emit("message", message);
};