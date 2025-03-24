import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const CourseCard = ({ course, onEdit, onDelete }) => (
    <Card style={{ margin: '1rem' }}>
        <CardContent>
            <Typography variant="h5">{course.name}</Typography>
            <Typography color="textSecondary">{course.description}</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => onEdit(course.id)}>Edit</Button>
            <Button size="small" onClick={() => onDelete(course.id)}>Delete</Button>
        </CardActions>
    </Card>
);

export default CourseCard;
