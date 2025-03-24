package com.example.smartschedule.service;

import com.example.smartschedule.dto.CourseDTO;
import com.example.smartschedule.model.Course;
import com.example.smartschedule.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public CourseDTO getCourseById(Long id) {
        Optional<Course> courseOpt = courseRepository.findById(id);
        return courseOpt.map(this::toDTO).orElse(null);
    }

    public CourseDTO createCourse(CourseDTO dto) {
        Course course = new Course();
        course.setName(dto.getName());
        course.setDescription(dto.getDescription());
        Course saved = courseRepository.save(course);
        return toDTO(saved);
    }

    public CourseDTO updateCourse(Long id, CourseDTO dto) {
        return courseRepository.findById(id).map(existing -> {
            existing.setName(dto.getName());
            existing.setDescription(dto.getDescription());
            Course updated = courseRepository.save(existing);
            return toDTO(updated);
        }).orElse(null);
    }

    public boolean deleteCourse(Long id) {
        if (courseRepository.existsById(id)) {
            courseRepository.deleteById(id);
            return true;
        }
        return false;
    }

    private CourseDTO toDTO(Course course) {
        CourseDTO dto = new CourseDTO();
        dto.setId(course.getId());
        dto.setName(course.getName());
        dto.setDescription(course.getDescription());
        return dto;
    }
}
