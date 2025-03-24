package com.example.smartschedule.service;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@EnableScheduling
@Component
public class ScheduledTasks {

    @Scheduled(fixedRate = 5000)
    public void performTask() {
        System.out.println("Scheduled task running every 5 seconds");
    }
}
