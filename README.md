# Note-Craft: A Secure Web-Based Note Management Platform

## A Full-Stack Web Application for Seamless Note Management

Notes-Craft is a secure and intuitive web-based platform for managing personal and shared notes. Built with React for the front-end and Node.js for the back-end, it leverages MongoDB for data storage and JSON Web Tokens (JWT) for secure authentication. This full-stack application allows users to create, edit, delete, and share notes with others, all while ensuring user data privacy.

## Run server locally
To run the server locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Note-craft.git
   cd Note-craft
2. Install dependencies: Navigate to the client and server folders and install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
3. Set up environment variables: Create a .env file in the server folder with the following keys:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
4. Start the development servers
- Run the client
   ```bash
   cd client
   npm start
- Run the server:
   ```bash
   cd server
   npm run dev
5. Access the application  
   
## Features

- **User Authentication:** 
   - **Signup:** Create an account to get started with the note management platform.
   - **Signin:** Log in to access your notes and interact with shared content.
- **Notes Management:**
   - **Create Notes:** Easily create new notes for personal or collaborative use.
   - **Edit Notes:** Edit your notes with a simple and intuitive interface.
   - **Delete Notes:** Securely delete your own notes.
- **Data Privacy:**
   - Only the creator of a note can edit or delete their notes, ensuring full control over personal data
- **Collaboration Features:**
   - View and read notes shared by other users for collaborative work.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** MongoDB (NoSQL)
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcrypt for password hashing
- **UI Framework:** Material-UI (MUI) for modern, responsive design

## Note-craft
![LoginPage](https://github.com/user-attachments/assets/efd18d68-53ad-4800-b8a8-1a83f11fdc2b)

![HomePage](https://github.com/user-attachments/assets/e4aa36a5-6b7d-4fcf-a410-02321707c128)

![WritePage](https://github.com/user-attachments/assets/e1808099-6d3a-44f0-807e-a44a67f4adff)

![ViewPage](https://github.com/user-attachments/assets/fee234c7-d0da-49e2-b31d-1fd4414ee924)

![EditPage](https://github.com/user-attachments/assets/f9da6519-8df5-4d24-b83f-67a79da78af5)






