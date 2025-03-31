import React, { useEffect, useState } from 'react';
import {
    Container,
    Typography,
    Grid,
    Button,
    Box,
    AppBar,
    Toolbar
} from '@mui/material';
import CourseCard from './components/CourseCard';
import { getCourses, deleteCourse } from './services/courseService';

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        try {
            const data = await getCourses();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteCourse(id);
            loadCourses();
        } catch (error) {
            console.error('Error deleting course', error);
        }
    };

    return (
        <>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Smart Schedule Tool
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?calendar,study)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#fff',
                    textAlign: 'center',
                    py: 8,
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="h2" component="h1" gutterBottom>
                        Welcome to Smart Schedule Tool
                    </Typography>
                    <Typography variant="h5" component="p" gutterBottom>
                        Manage your courses, schedule, and more with ease!
                    </Typography>
                    <Button variant="contained" color="secondary" size="large">
                        Get Started
                    </Button>
                </Container>
            </Box>

            {/* Main Content */}
            <Container sx={{ py: 4 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Your Courses
                </Typography>
                <Grid container spacing={3}>
                    {courses.map(course => (
                        <Grid item xs={12} sm={6} md={4} key={course.id}>
                            <CourseCard
                                course={course}
                                onDelete={handleDelete}
                                onEdit={(id) => console.log("Edit course:", id)}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button variant="contained" color="primary" onClick={() => console.log("Add course")}>
                        Add Course
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default App;
