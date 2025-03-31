

# Smart Schedule Tool

This is a full-stack project consisting of a Spring Boot backend and a React frontend. The project includes an optional Express proxy server for development purposes. Security is disabled for simplicity.

## Prerequisites

- **Java 17** and **Maven** (for the backend)
- **Node.js** and **npm** (for the frontend and proxy server)
- A running database (PostgreSQL or H2) configured in the backend

## How to Run

### 1. Run the Backend

1. Open a terminal in the project root (where the backend's `pom.xml` is located).
2. Build and start the backend with:
   ```bash
   mvn clean install
   mvn spring-boot:run

    The backend will start at: http://localhost:5000

2. Run the Frontend

    Navigate to the smart-schedule-frontend folder:

cd smart-schedule-frontend

Install dependencies:

npm install

Start the React development server:

    npm start

    The frontend will be available at: http://localhost:3000
    (API calls will be proxied to the backend via the proxy setting.)

3. (Optional) Run the Express Proxy Server

Use the proxy server to serve the React build and forward API requests if needed:

    Build the React App:
    In the smart-schedule-frontend folder, run:

npm run build

Copy the Build Folder:
Copy the build folder from smart-schedule-frontend into the proxy-server folder. (On Windows, use File Explorer or the command prompt with xcopy.)

Navigate to the proxy-server folder:

cd ../proxy-server

Install dependencies:

npm install

Start the proxy server:

    npm start

    The proxy server will start at: http://localhost:3000 and forward API requests to http://localhost:5000.

Troubleshooting

    500 Internal Server Error:
    Check the backend logs in the terminal for error details.

    Database Issues:
    Ensure your database is running and the connection settings in application.properties are correct.

    CORS Issues:
    The React app uses a proxy (or you can use the Express proxy) to avoid CORS issues.
