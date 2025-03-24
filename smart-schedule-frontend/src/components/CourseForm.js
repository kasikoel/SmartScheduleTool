import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};

const CourseForm = ({ onClose, onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        onSubmit({ name, description });
    };

    return (
        <Modal open onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>Add New Course</Typography>
                <TextField
                    label="Course Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Description"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ marginBottom: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CourseForm;
