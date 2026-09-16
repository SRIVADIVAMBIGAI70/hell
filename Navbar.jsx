function Navbar({ page, setPage, user, logout }) {
  return (
    <nav className="navbar">

      <div
        className="logo"
        onClick={() => setPage("home")}
      >
        Placement Tracker
      </div>

      <div className="nav-links">

        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className={page === "jobs" ? "active" : ""}
          onClick={() => setPage("jobs")}
        >
          Jobs
        </button>

        <button
          className={page === "applications" ? "active" : ""}
          onClick={() => setPage("applications")}
        >
          Applications
        </button>

        <button
          className={page === "profile" ? "active" : ""}
          onClick={() => setPage("profile")}
        >
          Profile
        </button>

        {user?.role === "admin" && (
          <button
            className={page === "admin" ? "active" : ""}
            onClick={() => setPage("admin")}
          >
            Admin
          </button>
        )}

        {!user ? (
          <button
            className="login-nav"
            onClick={() => setPage("login")}
          >
            Login
          </button>
        ) : (
          <button
            className="logout-nav"
            onClick={logout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;