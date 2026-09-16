import JobCard from "../components/JobCard";

function Jobs({ applyJob }) {

  const jobs = [
    {
      id: 1,
      company: "TechVerse Solutions",
      position: "Software Developer",
      location: "Bengaluru",
      salary: "₹6 LPA",
      type: "Full Time",
      skills: ["Java", "SQL", "React"]
    },
    {
      id: 2,
      company: "Nimbus Labs",
      position: "AI/ML Intern",
      location: "Remote",
      salary: "₹25K/month",
      type: "Internship",
      skills: ["Python", "ML", "TensorFlow"]
    },
    {
      id: 3,
      company: "GreenForge Energy",
      position: "Data Analyst",
      location: "Pune",
      salary: "₹5 LPA",
      type: "Full Time",
      skills: ["Python", "Excel", "SQL"]
    }
  ];

  return (
    <div className="page">

      <div className="page-header">

        <p>CAREER OPPORTUNITIES</p>

        <h1>Available Jobs</h1>

        <span>
          Find the right opportunity for your skills.
        </span>

      </div>

      <div className="jobs-grid">

        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            applyJob={applyJob}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;