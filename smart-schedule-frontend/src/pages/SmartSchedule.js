// src/pages/SmartSchedule.js
import React, { useEffect, useState } from "react";
import { getCourses } from "../services/api"; // Import from the centralized API file

const SmartSchedule = () => {
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                console.log("Fetching courses...");
                const response = await getCourses(); // Use the centralized API call
                console.log("Courses received:", response);
                setCourses(response);
            } catch (error) {
                setError("Failed to fetch courses. Please try again later.");
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses(); // Trigger the fetch when the component mounts
    }, []);

    return (
        <div>
            <h1>Smart Schedule</h1>
            {error ? (
                <p className="text-danger">{error}</p>
            ) : (
                <ul>
                    {courses.map((course) => (
                        <li key={course.id}>
                            {course.courseName} - {course.semester}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SmartSchedule;
