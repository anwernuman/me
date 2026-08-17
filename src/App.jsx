import { profile, experience, education, skills, highlights } from './data.js'

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-inner">
          <div className="avatar">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <span>{initials(profile.name)}</span>
            )}
          </div>
          <div className="hero-text">
            <h1>{profile.name}</h1>
            <p className="title">{profile.title}</p>
            <p className="meta">
              <span>{profile.location}</span>
              <span>·</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <div className="socials">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
              {profile.resumeUrl && (
                <a className="btn" href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="section">
          <h2>About</h2>
          <p className="summary">{profile.summary}</p>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <article className="card" key={i}>
                <div className="card-head">
                  <h3>
                    {job.role} <span className="at">@ {job.company}</span>
                  </h3>
                  <span className="period">{job.period}</span>
                </div>
                <p className="loc">{job.location}</p>
                <ul>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>What I Do</h2>
          <div className="grid">
            {highlights.map((item, i) => (
              <div className="project" key={i}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="tags">
                  {item.tech.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h4>{group.group}</h4>
                <div className="tags">
                  {group.items.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <div className="edu-grid">
            {education.map((ed, i) => (
              <div className="edu" key={i}>
                <h3>{ed.degree}</h3>
                <p className="school">{ed.school}</p>
                <p className="period">{ed.period}</p>
                {ed.details && <p className="details">{ed.details}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
      </footer>
    </div>
  )
}
