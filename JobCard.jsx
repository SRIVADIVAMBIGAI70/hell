function JobCard({ job, applyJob }) {
  return (
    <div className="job-card">

      <div className="job-top">

        <div>
          <h3>{job.position}</h3>

          <p className="company-name">
            {job.company}
          </p>
        </div>

        <span className="job-type">
          {job.type}
        </span>

      </div>

      <div className="job-details">
        <span>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>

      <div className="skills">

        {job.skills.map((skill, index) => (
          <span key={index}>
            {skill}
          </span>
        ))}

      </div>

      <button
        className="apply-btn"
        onClick={() => applyJob(job)}
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;