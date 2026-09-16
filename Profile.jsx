import { useState } from "react";

function Profile({ user, setUser }) {

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [skills, setSkills] = useState(
    user?.skills?.join(", ") || ""
  );

  // Login pannala na
  if (!user) {
    return (
      <div className="empty-page">
        <h2>Please Login</h2>

        <p>
          Login to create your profile.
        </p>
      </div>
    );
  }

  const saveProfile = () => {

    const updatedUser = {
      ...user,
      name: name,
      email: email,
      skills: skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    };

    // React state update
    setUser(updatedUser);

    // Browser-la save pannrom
    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    alert("Profile updated successfully!");
  };

  return (
    <div className="page">

      <div className="page-header">

        <p>STUDENT PROFILE</p>

        <h1>My Profile</h1>

        <span>
          Manage your personal details and skills.
        </span>

      </div>

      <div className="profile-box">

        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Enter your name"
        />

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Enter your email"
        />

        <label>Skills</label>

        <input
          type="text"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
          placeholder="Java, Python, React"
        />

        <button
          className="primary-btn"
          onClick={saveProfile}
        >
          Save Profile
        </button>

      </div>

    </div>
  );
}

export default Profile;