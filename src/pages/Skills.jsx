import './Skills.css'

function Skills() {
  const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js', 'Git','Python', 'SQL', 'Data Entry', 'Customer Service']

  return (
    <section className="skills">
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome">My expertise</p>
          <h1 className="name">Skills</h1>
          <ul className="skills-list">
            {skills.map((skill, index) => (
              <li key={index} className="skill-item">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="image-container">
          {/* <!-- Upload your photo here --> */}
        </div>
      </div>
    </section>
  )
}

export default Skills