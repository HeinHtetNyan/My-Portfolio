import React, { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import './Projects.css'

function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fallback to ensure text visibility if GSAP fails
    const timeout = setTimeout(() => {
      document.querySelectorAll('.projects h1, .project-card, .error').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
    }, 2000) // 2-second fallback

    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          'https://api.github.com/users/HeinHtetNyan/repos?sort=updated&per_page=6',
          {
            headers: {
              Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN || ''}`,
            },
          }
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub repositories: ${response.status}`)
        }

        const data = await response.json()
        setRepos(data)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchRepos()

    const ctx = gsap.context(() => {
      // Animate title
      gsap.to('.projects .title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      })

      // Stagger project cards
      gsap.to('.project-card', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power2.out',
      })

      // Animate error message (if present)
      gsap.to('.error', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'power2.out',
      })
    })

    return () => {
      clearTimeout(timeout) // Clear fallback timeout
      ctx.revert() // Cleanup GSAP animations
    }
  }, [])

  return (
    <section className="projects">
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome">My Work</p>
          <h1 className="title">Projects</h1>
          {loading && <p className="loading">Loading projects...</p>}
          {error && <p className="error">{error}</p>}
          <div className="project-grid">
            {repos.map(repo => (
              <div key={repo.id} className="project-card">
                <h3>{repo.name}</h3>
                <p>{repo.description || 'No description available'}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                  View on GitHub
                </a>
                {repo.homepage && (
                  <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="image-container">
          {/* <!-- Upload your photo here --> */}
        </div>
      </div>
    </section>
  )
}

export default Projects