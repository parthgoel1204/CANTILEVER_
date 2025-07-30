# Task Manager

A simple and efficient project and task management tool built with the MERN stack (MongoDB, Express, React, Node.js). Stay organized by creating projects, adding tasks, setting deadlines, and prioritizing your work. Includes authentication, notifications, and responsive design.

---

## 🚀 Features

- **User Authentication**: Register, login, and logout with JWT-based protected routes.
- **Dashboard**: Overview of total projects, tasks, and pending notifications.
- **Project Management**:
  - Create, read, update, and delete (CRUD) projects.
  - View all projects at `/projects` or `/project`.
- **Task Management**:
  - Add tasks with title, description, deadline, priority, and subtasks.
  - Mark tasks as completed or pending.
  - View tasks at `/tasks`, `/task`, or `/tasklist`.
- **Notifications**:
  - Simple notifications view at `/notification` (placeholder for future enhancements).
- **Protected Routes**: Only authenticated users can access dashboard, projects, tasks, and notifications.
- **React Router**: Client-side routing using `react-router-dom`.
- **Responsive UI**: Built with Tailwind CSS for mobile and desktop support.

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, React Toastify  
- **Backend**: Node.js, Express.js, Mongoose (MongoDB)  
- **Database**: MongoDB (local or Atlas)  
- **Authentication**: JSON Web Tokens (JWT)  
- **Version Control**: Git & GitHub  

---

## 📁 Repository Structure
```
├── task-manager-ui/ # React frontend
│ ├── public/
│ │ ├── favicon.ico # Custom favicon
│ │ └── index.html # Title & meta tags
│ ├── src/
│ │ ├── assets/ # Static assets (e.g. logos)
│ │ ├── components/ # React components
│ │ ├── App.jsx # Routes & layout
│ │ └── index.js # BrowserRouter wrapper
│ └── package.json
├── Task-Management-Backend/
│ ├── controllers/ # Route handlers
│ ├── db/ # MongoDB connection
│ ├── middlewares/ # Auth, error handling
│ ├── models/ # Mongoose schemas
│ ├── routes/ # Express routers
│ ├── utils/ # Helpers & constants
│ ├── .env # Environment variables (ignored)
│ └── server.js # Entry point
└── README.md # Project overview and setup instructions
```


---

## 💻 Getting Started

### Prerequisites

- Node.js v12 or higher  
- npm (comes with Node)  
- MongoDB (local install or MongoDB Atlas account)  

### 1. Clone the repo

```bash
git clone https://github.com/parthgoel1204/CANTILEVER_.git
```
---

## 2. Setup Backend

1. Navigate to the backend folder:
   ```bash
   cd Task-Management-Backend
  

2.   Install dependencies:
   ```bash
    npm install
   ```

3. Create a .env file at the project root with:
  ```
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   PORT=5000
```

4. Start the backend server in development mode:
```
   npm run dev
```

The server will run at http://localhost:5000

## 2. Setup Frontend
1. Open a new terminal and navigate to the frontend folder:
   ```
   cd ../task-manager-ui
   ```
   
2. Install dependencies:
   ```
    npm install
   ```
3. Start the React development server:
  ```
  npm start
  ```
4. The app should now be running at:
   ```
   http://localhost:3000
   ```
---

## 🔄 Usage
Register a new user at:
```
http://localhost:3000/signup
```
Login at:
```
http://localhost:3000/signup
```
Dashboard at:
  ```
http://localhost:3000/dashboard
```
Projects at:
  ```
http://localhost:3000/projects
http://localhost:3000/project
```
Tasks at:
  ```
http://localhost:3000/tasks
http://localhost:3000/task
http://localhost:3000/tasklist
```
Notifications at:
  ```
http://localhost:3000/notification
```
---

## License
This project is licensed under the MIT License.

## 📬 Contact
**Parth Goel**
Email:parthgoel1204@gmail.com

X: @codeslayerTanj
