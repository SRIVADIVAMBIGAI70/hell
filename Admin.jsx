import { useState } from "react";

function Admin({ applications, setApplications }) {

  // Companies
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "TechVerse Solutions",
      industry: "Technology",
      location: "Bengaluru"
    },
    {
      id: 2,
      name: "Nimbus Labs",
      industry: "AI Research",
      location: "Remote"
    },
    {
      id: 3,
      name: "GreenForge Energy",
      industry: "Energy",
      location: "Pune"
    }
  ]);

  // Jobs
  const [jobs] = useState([
    {
      id: 1,
      position: "Software Developer",
      company: "TechVerse Solutions"
    },
    {
      id: 2,
      position: "AI/ML Intern",
      company: "Nimbus Labs"
    },
    {
      id: 3,
      position: "Data Analyst",
      company: "GreenForge Energy"
    }
  ]);

  // New company form
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");

  // Add company
  const addCompany = () => {

    if (!companyName || !industry || !location) {
      alert("Please fill all company fields.");
      return;
    }

    const newCompany = {
      id: Date.now(),
      name: companyName,
      industry: industry,
      location: location
    };

    setCompanies([
      ...companies,
      newCompany
    ]);

    setCompanyName("");
    setIndustry("");
    setLocation("");

    alert("Company added successfully!");
  };

  // Change application status
  const updateStatus = (id, status) => {

    const updatedApplications = applications.map(
      (app) =>
        app.id === id
          ? {
              ...app,
              status: status
            }
          : app
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "applications",
      JSON.stringify(updatedApplications)
    );
  };

  // Count selected students
  const offers = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-header">

        <p>Administration</p>

        <h1>Placement Dashboard</h1>

        <span>
          Manage companies, jobs and student applications.
        </span>

      </div>


      {/* STATISTICS */}

      <div className="stats">

        <div className="stat-card">
          <h2>{companies.length}</h2>
          <p>Companies</p>
        </div>

        <div className="stat-card">
          <h2>{jobs.length}</h2>
          <p>Job Openings</p>
        </div>

        <div className="stat-card">
          <h2>{applications.length}</h2>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h2>{offers}</h2>
          <p>Offers Made</p>
        </div>

      </div>


      {/* COMPANIES */}

      <div className="admin-section">

        <h2>Companies</h2>

        <table>

          <thead>
            <tr>
              <th>NAME</th>
              <th>INDUSTRY</th>
              <th>LOCATION</th>
            </tr>
          </thead>

          <tbody>

            {companies.map((company) => (

              <tr key={company.id}>

                <td>{company.name}</td>

                <td>{company.industry}</td>

                <td>{company.location}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>


      {/* ADD COMPANY */}

      <div className="admin-section">

        <h2>Add Company</h2>

        <div className="form-grid">

          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) =>
              setCompanyName(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Industry"
            value={industry}
            onChange={(e) =>
              setIndustry(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) =>
              setLocation(e.target.value)
            }
          />

          <button
            className="primary-btn"
            onClick={addCompany}
          >
            Add Company
          </button>

        </div>

      </div>


      {/* STUDENT APPLICATIONS */}

      <div className="admin-section">

        <h2>Student Applications</h2>

        {applications.length === 0 ? (

          <p className="muted">
            No student applications yet.
          </p>

        ) : (

          <table>

            <thead>

              <tr>
                <th>STUDENT</th>
                <th>COMPANY</th>
                <th>POSITION</th>
                <th>STATUS</th>
              </tr>

            </thead>

            <tbody>

              {applications.map((app) => (

                <tr key={app.id}>

                  <td>
                    {app.student}
                  </td>

                  <td>
                    {app.company}
                  </td>

                  <td>
                    {app.position}
                  </td>

                  <td>

                    <select
                      value={app.status}
                      onChange={(e) =>
                        updateStatus(
                          app.id,
                          e.target.value
                        )
                      }
                    >

                      <option value="Applied">
                        Applied
                      </option>

                      <option value="Shortlisted">
                        Shortlisted
                      </option>

                      <option value="Selected">
                        Selected
                      </option>

                      <option value="Rejected">
                        Rejected
                      </option>

                    </select>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default Admin;