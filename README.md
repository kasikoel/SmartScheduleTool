

# Smart Schedule Tool

A full-stack homework project for managing courses and schedules. This project consists of a Spring Boot backend, a React frontend built with Material UI, and an optional Express proxy server to simplify development and avoid CORS issues.

> **Note:** For simplicity and homework purposes, security is disabled in the backend. Additionally, a monkey-patch is applied in the frontend to suppress a Node.js deprecation warning.

## Project Structure

SmartScheduleTool/ ├── smart-schedule-frontend/ # React frontend application │ ├── package.json # Frontend package.json (managed by Create React App) │ ├── public/ │ └── src/ │ ├── App.js # Main App component with course management │ ├── index.js # Entry point (imports polyfills first) │ ├── polyfills.js # Polyfills for Node (monkey-patches util._extend) │ ├── theme.js # Custom Material UI theme │ ├── components/ │ │ ├── CourseCard.jsx # Card to display a course │ │ └── CourseForm.jsx # Modal form for adding a course │ ├── pages/ │ │ ├── Home.jsx # Home page (could include additional content) │ │ ├── CourseList.jsx # Page listing all courses │ │ └── CourseDetail.jsx # (Optional) Page to display course details │ └── services/ │ └── courseService.js # Axios API service for course endpoints └── proxy-server/ # Express proxy server (optional) ├── package.json # Proxy server package.json (CommonJS mode) ├── server.js # Express server code (serves React build & proxies API) └── polyfills.js # Polyfills for Node in proxy server


## How to Run the Project

### 1. Backend (Spring Boot)

**Prerequisites:**
- Java 17
- Maven
- PostgreSQL (or H2 for testing)

**Setup:**

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd SmartScheduleTool

    Configure the Database:

        Update src/main/resources/application.properties with your database settings.

        For development, you can use H2 by ensuring the H2 dependency is present.

    Disable Security:

        For this homework project, Spring Security is disabled. Either remove the Spring Boot Starter Security dependency from the pom.xml or use a simple configuration that permits all requests.

    Build and Run:

    mvn clean install
    mvn spring-boot:run

        The backend will start on http://localhost:5000.

    Test the API:

        Visit http://localhost:5000/api/courses/ping to confirm the backend is running.

        Endpoints for retrieving, creating, and deleting courses are available under /api/courses.

2. Frontend (React)

Prerequisites:

    Node.js and npm

Setup:

    Navigate to the Frontend Directory:

cd smart-schedule-frontend

Install Dependencies:

npm install

Run in Development Mode:

    npm start

        This starts the React development server on http://localhost:3000.

        The proxy field in package.json ensures that API calls (e.g., /api/courses) are forwarded to http://localhost:5000.

    Polyfills and Warnings:

        The file src/polyfills.js includes a monkey-patch to override util._extend with Object.assign and suppress deprecation warnings.

        The polyfills are imported at the top of src/index.js.


Setup:

    Build the React App: In the smart-schedule-frontend folder, run:

npm run build

This creates a production-ready build folder.

Copy the Build Folder to the Proxy Server: From the project root, you can use a command in IntelliJ's terminal (on Windows use xcopy):

xcopy smart-schedule-frontend\build proxy-server\build /E /I /Y

Or copy it manually via the IntelliJ Project view.

Navigate to the Proxy Server Directory:

cd proxy-server

Install Dependencies:

npm install

Run the Proxy Server:

    npm start

        This starts the proxy server on http://localhost:3000, serving the React app and forwarding API requests to http://localhost:5000.

Troubleshooting Common Issues

    500 Internal Server Error on /api/courses:

        Check your backend logs in the console for stack traces.

        Test endpoints directly with Postman or cURL.

        Ensure your database is running and your JPA configuration is correct.

        If using Spring Security, ensure it’s disabled or properly configured for development.

    CORS Issues:

        The React app’s proxy setting (or the Express proxy server) ensures that cross-origin requests are handled.

        If you still face CORS errors, ensure your backend endpoints have @CrossOrigin(origins = "*") on the controllers.

    Deprecation Warning (util._extend):

        A polyfill in src/polyfills.js (and in the proxy server’s polyfills.js) overrides util._extend with Object.assign.

        To completely suppress warnings during development, you can add process.noDeprecation = true; at the top of your polyfill file.
