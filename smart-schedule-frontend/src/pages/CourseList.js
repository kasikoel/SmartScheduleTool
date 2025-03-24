import React, { useEffect, useState } from 'react';
import { Grid, Button, Snackbar, Alert } from '@mui/material';
import CourseCard from '../components/CourseCard';
import CourseForm from '../components/CourseForm';
import { getCourses, deleteCourse, createCourse } from '../services/courseService';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [openForm, setOpenForm] = useState(false);
    const [notification, setNotification] = useState('');

    const loadCourses = async () => {
        try {
            const data = await getCourses();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses', error);
        }
    };

    useEffect(() => {
        loadCourses();
    }, []);

    const handleDelete = async (id) => {
        await deleteCourse(id);
        loadCourses();
        setNotification('Course deleted');
    };

    const handleAddCourse = async (courseData) => {
        try {
            await createCourse(courseData);
            setNotification('Course added successfully');
            setOpenForm(false);
            loadCourses();
        } catch (error) {
            console.error('Error adding course', error);
            setNotification('Error adding course');
        }
    };

    return (
        <>
            <Button variant="contained" onClick={() => setOpenForm(true)} sx={{ marginBottom: 2 }}>
                Add Course
            </Button>
            <Grid container spacing={3}>
                {courses.map(course => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <CourseCard course={course} onDelete={handleDelete} />
                    </Grid>
                ))}
            </Grid>
            {openForm && (
                <CourseForm
                    onClose={() => setOpenForm(false)}
                    onSubmit={handleAddCourse}
                />
            )}
            <Snackbar
                open={Boolean(notification)}
                autoHideDuration={4000}
                onClose={() => setNotification('')}
            >
                <Alert severity="info" onClose={() => setNotification('')}>
                    {notification}
                </Alert>
            </Snackbar>
        </>
    );
};

export default CourseList;
