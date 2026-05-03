const TIMELINE_ENTRIES = [
  {
    id: '1',
    period: '2019',
    type: 'milestone',
    title: 'GEM is founded',
    description:
      'A student-led initiative forms around a simple idea: make STEM feel welcoming, hands-on, and possible for every girl who walks through the door.',
  },
  {
    id: '2',
    period: '2020',
    type: 'workshop',
    title: 'First hands-on robotics afternoon',
    description:
      'Pilot workshop introduces coding and build basics with near-peer mentors—setting the tone for small groups, lots of questions, and zero intimidation.',
  },
  {
    id: '3',
    period: '2021',
    type: 'event',
    title: 'Community showcase',
    description:
      'Participants share mini-projects with families and educators, building public speaking skills and celebrating progress out loud.',
  },
  {
    id: '4',
    period: '2022',
    type: 'milestone',
    title: 'Programs expand across grades',
    description:
      'Curriculum grows to meet middle and high school interests, with clearer pathways from “first build” to leadership roles on the team.',
  },
  {
    id: '5',
    period: '2023',
    type: 'workshop',
    title: 'Career pathways series',
    description:
      'Guest mentors from engineering, medicine, and tech host Q&A sessions so students can picture themselves in real roles—not just abstract jobs.',
  },
  {
    id: '6',
    period: '2024',
    type: 'event',
    title: 'Regional STEM collaboration day',
    description:
      'Partner schools and clubs join for a day of challenges and networking, strengthening the wider ecosystem supporting girls in STEM.',
  },
]

const TYPE_LABELS = {
  milestone: 'Milestone',
  workshop: 'Workshop',
  event: 'Event',
}

export function TimelinePage() {
  return (
    <main className="timeline-main">
      <header className="timeline-hero">
        <p className="tagline">Our journey</p>
        <h1>Timeline</h1>
        <p className="timeline-intro">
          Milestones, workshops, and moments that mark how GEM has grown—and
          how students have grown with us. Replace these entries anytime with
          your organization&apos;s real dates and stories.
        </p>
      </header>

      <ol className="timeline" aria-label="GEM chronology">
        {TIMELINE_ENTRIES.map((entry, index) => (
          <li
            key={entry.id}
            className={`timeline-item ${index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}
          >
            <div className="timeline-axis" aria-hidden="true">
              <span className="timeline-dot" />
            </div>
            <article className="timeline-card">
              <div className="timeline-card-meta">
                <time className="timeline-date" dateTime={entry.period}>
                  {entry.period}
                </time>
                <span className={`timeline-pill timeline-pill--${entry.type}`}>
                  {TYPE_LABELS[entry.type]}
                </span>
              </div>
              <h2 className="timeline-card-title">{entry.title}</h2>
              <p className="timeline-card-body">{entry.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </main>
  )
}
