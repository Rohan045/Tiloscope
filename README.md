# Tiloscope

Tiloscope is a web application for creating, managing, and interacting with boards in a community-driven platform. It allows users to register, create boards, share them, upvote, and view user profiles. The application includes features like responsive design and quick loading, ensuring an optimal user experience.

## Features

- **User Registration**: Register with valid credentials and get redirected to the dashboard.
- **User Login**: Log in with valid credentials and get redirected to the homepage.
- **Create a Board**: Create a new board with a selected layout.
- **Show/Hide/Edit Board**: Toggle visibility or edit boards in "My Boards".
- **Share a Board**: Share a board with others via a link.
- **Upvote a Board**: Increase the upvote count on a board.
- **Leaderboard**: View the leaderboard displaying boards ranked by upvotes.
- **User Profile**: Click on a user's profile picture to view their information.
- **User Profile Edit**: Edit your own profile information.
- **Performance**: Fast loading and responsive UI on various screen sizes.

## Prerequisites

To run the application locally, you need to have the following installed:

- Node.js (Preferred version: 20+)
- npm (Node Package Manager)

## Getting Started

### Clone the Repository

Clone the repository using the following command:

`git clone https://github.com/Rohan045/tiloscope.git`

### Install Dependencies

Navigate to the project directory and install the required dependencies:

`cd tiloscope`

`npm install`

### Set up Environment Variables

You need to configure the `.env` file in the root directory with the correct values for your environment. Create a `.env` file (if it doesn't already exist) and update it with the following content:


markdown
Copy code
# Tiloscope

Tiloscope is a web application for creating, managing, and interacting with boards in a community-driven platform. It allows users to register, create boards, share them, upvote, and view user profiles. The application includes features like responsive design and quick loading, ensuring an optimal user experience.

## Features

- **User Registration**: Register with valid credentials and get redirected to the dashboard.
- **User Login**: Log in with valid credentials and get redirected to the homepage.
- **Create a Board**: Create a new board with a selected layout.
- **Show/Hide/Edit Board**: Toggle visibility or edit boards in "My Boards".
- **Share a Board**: Share a board with others via a link.
- **Upvote a Board**: Increase the upvote count on a board.
- **Leaderboard**: View the leaderboard displaying boards ranked by upvotes.
- **User Profile**: Click on a user's profile picture to view their information.
- **User Profile Edit**: Edit your own profile information.
- **Performance**: Fast loading and responsive UI on various screen sizes.

## Prerequisites

To run the application locally, you need to have the following installed:

- Node.js (Preferred version: 20+)
- npm (Node Package Manager)

## Getting Started

### Clone the Repository

Clone the repository using the following command:

`git clone https://github.com/Rohan045/tiloscope.git`

### Install Dependencies

Navigate to the project directory and install the required dependencies:

`cd tiloscope`

`npm install`

### Set up Environment Variables

You need to configure the `.env` file in the root directory with the correct values for your environment. Create a `.env` file (if it doesn't already exist) and update it with the following content:
```bash
REACT_APP_FRONTEND_BASE_URL = http://localhost:PORT 
REACT_APP_SERVICE_BASE_URL = http://localhost:PORT 
REACT_APP_FRONTEND_URL = https://github.com/Rohan045/tiloscope 
REACT_APP_BACKEND_URL = https://github.com/vishal2468/tiloscope
```

- Replace `PORT` with the appropriate port number for your development environment.

### Run the Application

After setting up the environment variables, run the application using the following command:

`npm start`

This will start the development server and the application will be accessible in your browser at `http://localhost:3000` by default.

### Backend Service

The backend service for this project is available at the following GitHub repository:

- [Backend Repository](https://github.com/vishal2468/tiloscope.git)

Make sure the backend service is running on the appropriate port as specified in the `.env` file.

## Test Cases

Here are the expected behaviors for the key features of the application:

### 1. User Registration
- **Action**: Register with valid credentials.
- **Expected Result**: User is successfully registered and redirected to the dashboard.

### 2. User Login
- **Action**: Log in with valid credentials.
- **Expected Result**: User is logged in and redirected to the homepage.

### 3. Create a Board
- **Action**: Create a new board with a selected layout.
- **Expected Result**: A new board is created and opened for editing.

### 4. Show/Hide/Edit Board
- **Action**: Toggle board visibility (show or hide) or edit from "My Boards".
- **Expected Result**: Board visibility is changed or the board is opened for editing as per user choice.

### 5. Share a Board
- **Action**: Share a board via a link.
- **Expected Result**: The board is accessible via the shared link.

### 6. Upvote a Board
- **Action**: Upvote a board post.
- **Expected Result**: The upvote count for the board increases by one.

### 7. View Leaderboard
- **Action**: View the leaderboard with boards ranked by upvotes.
- **Expected Result**: The leaderboard shows boards ordered by upvotes.

### 8. User Profile
- **Action**: Click on any user profile picture or user information.
- **Expected Result**: The user profile dialog opens with their information.

### 9. User Profile Edit
- **Action**: Click on your own user profile picture or user information.
- **Expected Result**: The user profile dialog opens with editable options for user information.

### 10. Performance
- **Action**: Interact with the application.
- **Expected Result**: The application should load quickly, and the UI should be responsive across different screen sizes.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js (via [tiloscope backend service](https://github.com/vishal2468/tiloscope.git))
- **CSS**: For styling and responsive UI
- **State Management**: React Hooks, Context API (if used)

## Contributing

If you'd like to contribute to the development of Tiloscope, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to your fork
6. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
