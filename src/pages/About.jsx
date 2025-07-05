import './About.css'

function About() {
  return (
    <section className="about">
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome">Get to know me</p>
          <h1 className="name">About Me</h1>
          <div className="about-sections">
            <div className="section">
              <h2>Profile</h2>
              <p>I am an aspiring backend developer with one year of experience in customer service and data entry, where I honed strong communication, problem-solving, and time management skills.
                Currently pursuing a degree in Information & Communication Technology, I am eager to leverage my practical experience and growing technical knowledge to build efficient backend systems. Dedicated to continuous learning and development, I’m ready to contribute positively in dynamic and fast-paced tech environments.</p>
            </div>
            <div className="section">
              <h2>Employment History</h2>
              <h3>Customer Service, Infinity Digital Store, Yangon</h3>
              <p><strong>2019 - 2020</strong></p>
              <ul>
                <li>Delivered exceptional customer service to enhance client satisfaction.</li>
                <li>Resolved customer inquiries and issues efficiently, ensuring timely responses.</li>
                <li>Documented customer interactions and fed back to improve service quality.</li>
                <li>Collaborated with team members to streamline processes and enhance service delivery.</li>
                <li>Assisted in training new staff on customer service protocols and best practices.</li>
              </ul>
            </div>
            <div className="section">
              <h2>Education</h2>
              <p><strong>Information & Communication Technology & B., Rangit University</strong></p>
              <p>January 2023 - January 2025</p>
              <p><strong>High School (RFHS-3, Monywa, Myanmar, Monywa)</strong></p>
              <p>Graduated with Honors the Matriculation Examination</p>
              <p><strong>Technology University, Monywa</strong></p>
              <p>2017 - 2020</p>
            </div>
            <div className="section">
              <h2>Certificate</h2>
              <p><strong>ASEAN Data Science Explorers 2023 - Enablement Session</strong></p>
              <p>Participated in the ASEAN Data Science Explorers 2023 Enablement Session, focusing on the application of SAP Analytics Cloud for data analysis and storytelling to address regional issues.</p>
              <p><strong>AI: From Bright Futures to Dark Possibilities</strong></p>
              <p>Participated in the seminar "AI: From Bright Futures to Dark Possibilities," contributing to discussions on the ethical and practical impacts of artificial intelligence on future technologies.</p>
              <p><strong>Google AI Essentials Specialization Certificate!</strong></p>
              <p>July 2025 Certificate from Coursera</p>
            </div>
            <div className="section">
              <h2>Soft Skills</h2>
              <ul>
                <li>Fast Learner</li>
                <li>Adaptability</li>
                <li>Attention to Detail</li>
                <li>Time Management</li>
                <li>Teamwork</li>
                <li>Effective Communication</li>
                <li>Problem Solving</li>
              </ul>
            </div>
            <div className="section">
              <h2>Workplace Skills</h2>
              <ul>
                <li>Customer Service</li>
                <li>Digital Seller</li>
                <li>Data Entry</li>
              </ul>
            </div>
            <div className="section">
              <h2>Languages</h2>
              <ul>
                <li>Burmese</li>
                <li>English</li>
                <li>German</li>
              </ul>
            </div>
            <div className="section">
              <h2>Hobbies</h2>
              <ul>
                <li>Watching Netflix, Listening to Music</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image-container">
          {/* <!-- Upload your photo here --> */}
        </div>
      </div>
    </section>
  )
}

export default About