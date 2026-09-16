import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Applications from "./pages/Applications";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  const [page, setPage] = useState("home");

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  const [applications, setApplications] = useState(
    JSON.parse(localStorage.getItem("applications")) || []
  );

  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    localStorage.setItem("currentUser", JSON.stringify(loggedUser));

    if (loggedUser.role === "admin") {
      setPage("admin");
    } else {
      setPage("home");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
    setPage("home");
  };

  const applyJob = (job) => {
    if (!user) {
      alert("Please login first!");
      setPage("login");
      return;
    }

    const alreadyApplied = applications.some(
      (app) => app.jobId === job.id && app.email === user.email
    );

    if (alreadyApplied) {
      alert("You have already applied for this job.");
      return;
    }

    const newApplication = {
      id: Date.now(),
      jobId: job.id,
      company: job.company,
      position: job.position,
      location: job.location,
      email: user.email,
      student: user.name,
      status: "Applied",
    };

    const updatedApplications = [...applications, newApplication];

    setApplications(updatedApplications);
    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );

    alert("Application submitted successfully!");
  };

  return (
    <>
      <Navbar
        page={page}
        setPage={setPage}
        user={user}
        logout={handleLogout}
      />

      {page === "home" && (
        <Home
          user={user}
          setPage={setPage}
        />
      )}

      {page === "jobs" && (
        <Jobs
          user={user}
          applyJob={applyJob}
        />
      )}

      {page === "applications" && (
        <Applications
          user={user}
          applications={applications}
        />
      )}

      {page === "profile" && (
        <Profile
          user={user}
          setUser={setUser}
        />
      )}

      {page === "login" && (
        <Login
          onLogin={handleLogin}
        />
      )}

      {page === "admin" && (
        <Admin
          applications={applications}
          setApplications={setApplications}
        />
      )}
    </>
  );
}

export default App;