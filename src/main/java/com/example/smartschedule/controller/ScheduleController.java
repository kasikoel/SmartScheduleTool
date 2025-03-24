package com.example.smartschedule.controller;

import com.example.smartschedule.model.Course;
import com.example.smartschedule.service.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    @Autowired
    private ScheduleService scheduleService;

    @PostMapping("/create")
    public String createSchedule(@RequestBody Course course) {
        scheduleService.saveCourse(course);
        return "Schedule created successfully";
    }

    @GetMapping("/all")
    public List<Course> getAllCourses() {
        return scheduleService.getAllCourses();
    }
}