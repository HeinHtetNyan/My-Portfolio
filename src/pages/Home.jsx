import './Home.css'

function Home() {
  return (
    <section className="home">
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome">Welcome</p>
          <h1 className="name">Hey, My name is<br />Hein Htet Nyan</h1>
          <p className="description">I'm a passionate backend developer building fast, reliable, and scalable server-side applications.</p>
          <div className="buttons">
            <Link to="/contact" className="cta-button primary">Hire Me Now</Link>
          </div>
        </div>
        <div className="image-container">
          {/* <img src="/path-to-your-photo.jpg" alt="Hein Htet Nyan with cats" className="profile-photo" /> */}
        </div>
      </div>
    </section>
  )
}

export default Home;