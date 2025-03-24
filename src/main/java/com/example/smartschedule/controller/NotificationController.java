package com.example.smartschedule.controller;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.web.bind.annotation.RestController;

import com.corundumstudio.socketio.SocketIOServer;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final SocketIOServer socketIOServer;

    public NotificationController(SocketIOServer socketIOServer) {
        this.socketIOServer = socketIOServer;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendNotification(@RequestBody String message) {
        socketIOServer.getBroadcastOperations().sendEvent("message", message);
        return ResponseEntity.ok("Notification sent");
    }
}