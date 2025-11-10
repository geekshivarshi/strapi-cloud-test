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

--- 
# Migrating to Strapi Cloud

1. Get the dump of the production database and put it in the `/database/dumps` folder. (If the folder does not exist, create one.)
2. Set up the local database:
```yml
# docker-compose.yml

version: '3.8'

services:
postgres:
   image: postgres:15
   container_name: strapi-postgres
   restart: unless-stopped
   environment:
      POSTGRES_DB: kaizen
      POSTGRES_USER: kaizen
      POSTGRES_PASSWORD: kaizen
   ports:
      - "5433:5432"
   volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./database/dumps:/docker-entrypoint-initdb.d
   networks:
      - strapi-network

volumes:
postgres_data:

networks:
strapi-network:
   driver: bridge 
```
   Then run:
```bash
docker-compose up
```
- update env to connect to local db
```
# for local
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_NAME=kaizen
DATABASE_USERNAME=kaizen
DATABASE_PASSWORD=kaizen
DATABASE_SSL=false
DATABASE_URL=postgres://kaizen:kaizen@localhost:5433/kaizen
```

3. Populate the local database with the production dump. We have a script for that. Run:
```bash
   bash scripts/import_dump.sh
```
4. Then start the local Strapi instance:
```bash
   yarn develop
```
5. Go to Strapi Admin > Settings > Authentication Token and generate a *full access* auth token. (Copy the token and keep it somewhere safe.)
6. Change the token type to *custom* and add all the permissions for the upload.
7. Let's start by importing products:
- Go to `scripts/import-product-script.js` and fill in the TODOs for backend URL, client secret, and the Strapi auth token that we just created.
- Then upload the icon images for the product info icon pointer (from the CMS) in Strapi and copy their asset IDs. Update those IDs in the mapping object at the top of the script.
- Then run the script:
``` bash
   node scripts/import-product-script.js
```
- The script will loop over each product one by one, upload its media to Strapi (skips if media is already present), and then create an entry for the product in Strapi's products table.
- If some of the products failed for some reason, you can re-run the script to try adding the failed products. (It will skip over already added products.)
- If the problem still persists, update the values of `offset` and `limit` in the API call to the backend and migrate the products in sets of 5 or 10 at a time.

> Can make the customerUrl and isActive status view only in strapi, if to be managed by our cms

8. Now we can import the categories (and build the relation with our Strapi products):
> **NOTE:** The category relations are based on the category pages that we have on the website, and have nothing to do with the categories in our backend.

9. First, we will import the categories from the *New Collection Pages* table:
- Go to the `scripts/import-new-collection-to-category.js` file.
- Add the value for the Strapi auth token to the script (marked by TODO).
- Run the script:
```bash
node scripts/import-new-collection-to-category.js
```
- If some rows are missing, re-run the script or increase the page size and then try again.
10. Now we will import the old collection pages one by one (like business cards, banner and signage, posters, etc.). Since each collection is in a separate table, we will import them one at a time:
- Go to `scripts/import-old-collection-to-category.js`.
- Add the value for the Strapi auth token to the script.
- Now we go one by one. For each old category, we will need to update the fetch query (marked by TODO). Only keep the relevant fields that are available in the category page. For example, some pages do not have an eco card or product specs section, and some have product specs with carousels. So we need to update the fetch query for each category.
- The query uses aliases, so only update the field name while keeping the aliases the same. For example, a field is like `<alias>:<field>` in the query, so keep the alias the same. For example, `oldCategoryPage: businessCards` to `oldCategoryPage: stickers`.
- There are a few places in the script where we need to add data manually before each run (like collection name and URL on the website). This data was not available in the old data and needs to be entered by the user. Each place is marked with a TODO. Fill out all the required values.
- Then run the script:
```bash
node scripts/import-old-collection-to-category.js
```
11. Update the permissions of the product and category tables, to allow public user to read the products and category

> Now we should have a local Strapi instance with all the production data (which we got from the dump) and all the category and products data (which we added via API calls from the scripts). Now we will migrate the entire thing to Strapi Cloud.
>
> You can take a dump of the local database at this point as a backup with all the new data.

12. Go to Strapi Cloud and create a new project with the same repository.
13. Once the project is up and running, log in to Strapi Cloud.
14. In Strapi Cloud, go to Settings > Transfer Token and generate a new *push type* transfer token. (Copy the token and keep it safe.)
15. Now we will transfer the data from our local instance to the Strapi Cloud instance. In your local terminal, run:
```bash
   yarn strapi transfer --to <strapi-cloud-url> --exclude files
```
- Since all our files are hosted on GCP, we don't need to transfer the binaries, just the database entries for those files.
- The command will ask for the transfer token and confirmation before overriding data on the cloud instance.
- This will take a while to run.
- Once the transfer is successful, go to the cloud and verify the data.