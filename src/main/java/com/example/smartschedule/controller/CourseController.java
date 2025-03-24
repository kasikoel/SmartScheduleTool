package com.example.smartschedule.controller;

import com.example.smartschedule.model.Course;
import com.example.smartschedule.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository; // Injected instance of CourseRepository

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return courseRepository.findAll(); // Call findAll() on the injected instance
    }
}