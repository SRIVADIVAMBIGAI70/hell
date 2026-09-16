function Applications({ user, applications }) {

  // User login pannala na
  if (!user) {
    return (
      <div className="empty-page">
        <h2>Please Login</h2>

        <p>
          Login to view your job applications.
        </p>
      </div>
    );
  }

  // Current student oda applications mattum filter pannrom
  const myApplications = applications.filter(
    (app) => app.email === user.email
  );

  return (
    <div className="page">

      {/* Page Heading */}
      <div className="page-header">

        <p>MY APPLICATIONS</p>

        <h1>Application Tracker</h1>

        <span>
          Track all your placement applications.
        </span>

      </div>

      {/* No applications */}
      {myApplications.length === 0 ? (

        <div className="empty-box">

          <h3>No applications yet</h3>

          <p>
            Apply for a job to see your application here.
          </p>

        </div>

      ) : (

        /* Applications List */
        <div className="application-list">

          {myApplications.map((app) => (

            <div
              className="application-card"
              key={app.id}
            >

              <div>

                <h3>
                  {app.position}
                </h3>

                <p>
                  {app.company}
                </p>

                <small>
                  {app.location}
                </small>

              </div>

              <span
                className={`status ${app.status
                  .toLowerCase()
                  .replace(" ", "-")}`}
              >
                {app.status}
              </span>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Applications;