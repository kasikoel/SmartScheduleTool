// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getUser } from '../services/api'; // Import the getUser function from api.js

const Dashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser(); // Use the centralized API function
                setUserData(data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData(); // Fetch data when component mounts
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            {userData ? (
                <pre>{JSON.stringify(userData, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
