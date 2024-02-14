# Kaizen Strapi CMS

This project is built using Strapi, a leading open-source headless CMS, and is configured to use PostgreSQL as the database. Follow these steps to set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js (version as per project's requirement, e.g., 14.x or higher)
- npm (usually comes with Node.js)
- PostgreSQL (version 12 or higher recommended)

## Setting Up PostgreSQL

1. **Install PostgreSQL**: If not already installed, download and install PostgreSQL from [the official site](https://www.postgresql.org/download/).

2. **Create the Database and User**:
   - Access the PostgreSQL terminal by typing `psql` in your command line.
   - Create a new database: `CREATE DATABASE kaizen;`
   - Create a new user: `CREATE USER kaizen WITH ENCRYPTED PASSWORD 'kaizen';` 
   - Grant all privileges on the database to your new user: `GRANT ALL PRIVILEGES ON DATABASE kaizen TO kaizen;`

## Project Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**:
   Navigate to the project directory and install the required npm packages:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory of the project and add the following lines, replacing values as appropriate:
   ```plaintext
   DATABASE_CLIENT=postgres
   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_NAME=kaizen
   DATABASE_USERNAME=kaizen
   DATABASE_PASSWORD=kaizen
   ```

4. **Run the Project**:
   Start the Strapi development server:
   ```bash
   npm run develop
   ```
   This command starts the Strapi server and opens the Strapi admin panel in your browser.

## Accessing the Admin Panel

- Once the server is running, access the Strapi admin panel by navigating to `http://localhost:1337/admin` in your browser.
- Complete the admin user registration process to access the Strapi dashboard.

## Additional Commands

- **Build Admin UI**: To build the Strapi admin UI, run:
  ```bash
  npm run build
  ```
- **Start Strapi in Production**: To start the server in production mode, run:
  ```bash
  npm start
  ```