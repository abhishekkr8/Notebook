# Notekeep

Notekeep is a sleek and user-friendly web application built on the MongoDB, Express, React, and Node (MERN) stack. It is designed to simplify and enhance your note-taking experience.

## Features

- **User Authentication**: Securely sign up and log in to your personalized Notekeep account.
- **Create Notes**: Easily create new notes with titles, descriptions, and tags.
- **Edit Notes**: Effortlessly edit existing notes to keep your information up-to-date.
- **Delete Notes**: Delete unwanted or outdated notes for better organization.
- **Tagging System**: Categorize your notes using tags for quick and easy retrieval.
- **Intuitive User Interface**: The user-friendly interface ensures a seamless and enjoyable experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abhishekkr8/Intership_project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Notekeep
   ```

3. Install dependencies for both the client and server:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. Create a `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

   Replace `<Your MongoDB URI>` with your MongoDB connection string and `<Your JWT Secret>` with a secure string for JWT token generation.

5. Start the server:

   ```bash
   cd server && npm start
   ```

   This will start the server on `http://localhost:5000`.

6. Start the client (in a new terminal window):

   ```bash
   cd client && npm start
   ```

   This will start the client on `http://localhost:3000`.

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. Sign up or log in to your Notekeep account.
3. Start creating, editing, and organizing your notes.

## Contributing

Contributions are welcome! If you'd like to contribute to Notekeep, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to your branch: `git push origin feature-name`.
5. Submit a pull request.
