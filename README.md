# SmartScheduleTool

SmartScheduleTool is a prototype for an optimized course scheduling system designed to help students graduate on time. This application uses **Spring Boot** for the backend, **PostgreSQL** as the database, and exposes functionality through a **RESTful API**.


---

Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Java 17: [Download Java 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- Maven: [Download Maven](https://maven.apache.org/download.cgi)
- PostgreSQL: [Download PostgreSQL](https://www.postgresql.org/download/)
- Git: [Download Git](https://git-scm.com/downloads)
- (Optional) **IntelliJ IDEA** or any other IDE: [Download IntelliJ IDEA](https://www.jetbrains.com/idea/)

---

 Installation

1. Clone the Repository
   ```bash
   git clone https://github.com/your-username/SmartScheduleTool.git
   cd SmartScheduleTool
   ```

2. Install Dependencies
   Use Maven to install all required dependencies:
   ```bash
   mvn clean install
   ```

3. Set Up the Database
   - Create a PostgreSQL database named `course_scheduler` (or any name of your choice).
   - Ensure the database is running and accessible.

---

Configuration

1. Update `application.properties`
   Open the `src/main/resources/application.properties` file and update the following fields with your PostgreSQL credentials:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/course_scheduler
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```



 Running the Application

1. Start the Backend
   Run the Spring Boot application using Maven:
   ```bash
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`.

2. Verify the Application
   Once the application starts, you should see logs indicating that the embedded Tomcat server is running. You can test the API endpoints using tools like **Postman** or **cURL**.

---

API Endpoints

Course Management
- GET `/api/courses`: Retrieve a list of all courses.
- POST `/api/courses`: Add a new course. Example request body:
  ```json
  {
    "name": "Introduction to Computer Science",
    "code": "CS101",
    "credits": 3
  }
  ```



