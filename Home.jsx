function Home({ user, setPage }) {
  return (
    <div className="page">

      <section className="hero">

        <div className="hero-content">

          <p className="small-heading">
            STUDENT PLACEMENT PORTAL
          </p>

          <h1>
            Your Career Journey
            <br />
            Starts Here
          </h1>

          <p>
            Find opportunities, apply for jobs,
            and track your placement journey
            in one simple platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => setPage("jobs")}
            >
              Explore Jobs
            </button>

            {!user && (
              <button
                className="secondary-btn"
                onClick={() => setPage("login")}
              >
                Create Profile
              </button>
            )}

          </div>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <div className="feature-icon">💼</div>
          <h3>Find Jobs</h3>
          <p>
            Explore job opportunities from
            different companies.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📄</div>
          <h3>Easy Applications</h3>
          <p>
            Apply for suitable positions
            with just one click.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Track Status</h3>
          <p>
            Monitor your application status
            anytime.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;