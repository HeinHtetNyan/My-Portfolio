import './Contact.css'

function Contact() {
  return (
    <section className="contact">
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome">Get in touch</p>
          <h1 className="title">Contact Me</h1>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:heinhtetnyanh09@gmail.com">heinhtetnyanh09@gmail.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/HeinHtetNyan" target="_blank" rel="noopener noreferrer">https://github.com/HeinHtetNyan</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hein-htet-nyan-h09" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/hein-htet-nyan-h09</a></p>
            <p><strong>LineID:</strong> 1561972962000</p>
            <p><strong>Phone Number:</strong> +66817639774</p>
          </div>
        </div>
        <div className="image-container">
          {/* <!-- Upload your photo here --> */}
        </div>
      </div>
    </section>
  )
}

export default Contact