import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Dashboard from "./components/Dashboard";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";
import Notifications from "./components/Notifications";      // <- new
// import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import Login from "./components/Login";
import LoggedOut from "./components/LoggedOut";
import Register from "./components/Signup";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [taskCount, setTaskCount] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    const tok = localStorage.getItem("token");
    if (tok) setToken(tok);
  }, []);

  return (
    <div className="min-h-screen flex w-full bg-gray-light">
      <Routes>
        {/* Home redirect */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Auth */}
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<Register />} />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute token={token}>
              <Dashboard taskCount={taskCount} token={token} setToken={setToken} />
            </ProtectedRoute>
          }
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={token ? <ProjectList token={token} setToken={setToken} /> : <LoggedOut />}
        />
        <Route
          path="/project"
          element={token ? <ProjectList token={token} setToken={setToken} /> : <LoggedOut />}
        />

        {/* Tasks */}
        <Route
          path="/tasks"
          element={
            token ? (
              <TaskList token={token} setToken={setToken} setTaskCount={setTaskCount} />
            ) : (
              <LoggedOut />
            )
          }
        />
        <Route
          path="/task"
          element={
            token ? (
              <TaskList token={token} setToken={setToken} setTaskCount={setTaskCount} />
            ) : (
              <LoggedOut />
            )
          }
        />
        <Route
          path="/tasklist"
          element={
            token ? (
              <TaskList token={token} setToken={setToken} setTaskCount={setTaskCount} />
            ) : (
              <LoggedOut />
            )
          }
        />

        {/* Notifications */}
        <Route
          path="/notification"
          element={token ? <Notifications /> : <LoggedOut />}
        />

        {/* Catch‑all */}
        <Route path="*" element={<Notfound />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}
