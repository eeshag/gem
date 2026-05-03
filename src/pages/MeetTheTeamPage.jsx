const OFFICERS = [
  {
    id: '1',
    name: 'Maya Chen',
    role: 'President',
    bio: 'Leads GEM’s vision and partnerships, making sure every workshop feels welcoming—from first-time builders to students ready to mentor others.',
    imageSrc: null,
    imageAlt: 'Portrait of Maya Chen',
  },
  {
    id: '2',
    name: 'Jordan Rivera',
    role: 'Vice President',
    bio: 'Coordinates mentors and logistics so sessions run smoothly, with a focus on hands-on activities and small-group support.',
    imageSrc: null,
    imageAlt: 'Portrait of Jordan Rivera',
  },
  {
    id: '3',
    name: 'Sam Okonkwo',
    role: 'Program Director',
    bio: 'Designs curriculum pathways and tracks outcomes so students see a clear line from curiosity to confidence in STEM.',
    imageSrc: null,
    imageAlt: 'Portrait of Sam Okonkwo',
  },
]

function TeamPhoto({ name, imageSrc, imageAlt }) {
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={imageAlt}
        className="team-card-photo"
        width={280}
        height={280}
      />
    )
  }

  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="team-card-photo team-card-photo--placeholder" aria-hidden="true">
      {initials}
    </div>
  )
}

export function MeetTheTeamPage() {
  return (
    <main className="team-main">
      <header className="team-hero">
        <p className="tagline">People behind the mission</p>
        <h1>Meet the team</h1>
        <p className="team-intro">
          The leaders and mentors who keep GEM running—plus the story of how we
          got started. Replace officer details and photos with your
          organization&apos;s real roster anytime.
        </p>
      </header>

      <section className="team-story" aria-labelledby="our-story-heading">
        <h2 id="our-story-heading">Our story</h2>
        <div className="team-story-body">
          <p>
            GEM began as a student-led idea: STEM should feel welcoming,
            hands-on, and possible for every girl who wants to try it. What
            started as small afternoons in a classroom grew into workshops,
            showcases, and mentorship—always with near-peer role models in the
            room.
          </p>
          <p>
            Our vision is simple—expand access, build confidence, and make the
            path from &quot;first build&quot; to leadership visible and
            achievable. As we&apos;ve grown across grades and partnered with
            schools and clubs, students haven&apos;t just learned skills;
            they&apos;ve found a community that cheers for their progress.
          </p>
        </div>
      </section>

      <section className="team-officers" aria-labelledby="officers-heading">
        <h2 id="officers-heading">Officer profiles</h2>
        <ul className="team-grid">
          {OFFICERS.map((officer) => (
            <li key={officer.id}>
              <article className="team-card">
                <TeamPhoto
                  name={officer.name}
                  imageSrc={officer.imageSrc}
                  imageAlt={officer.imageAlt}
                />
                <h3 className="team-card-name">{officer.name}</h3>
                <p className="team-card-role">{officer.role}</p>
                <p className="team-card-bio">{officer.bio}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
