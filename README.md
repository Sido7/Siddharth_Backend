# Project Name
Siddharth_Backend
## Description
This is a Node.js application built with TypeScript and Prisma, providing various functionalities such as database interaction, authentication, and more.

## Prerequisites
Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (Package manager)

## Steps to Run the Application

### 1. Clone the Repository
First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <project-directory>'

#### 2. Install The Dependecy 
     npm instal
     npm install --save-dev
#### 3. Add .env File
       PORT=3000
       SECRETE_KEY="AddedARandomKey"
       EMAIL_USER=""
       EMAIL_ADMIN=""
       EMAIL_PASS=""
       DATABASE_URL="mysql://user:password@localhost:3306/backend?schema=public"

#### 4. Setup the DataBase
        npx prisma migrate dev

#### 5. Build the Project
        npm run build

#### 6. Run the Project
        npm run start

#### 7. Running in Development Mode
        npm run dev
        
       

