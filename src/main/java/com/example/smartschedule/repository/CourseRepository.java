package com.example.smartschedule.repository;

import com.example.smartschedule.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> { }
