export default function PhaseHeader({ number, title, timeline, description }) {
  return (
    <div className="phase-header">
      <div className="phase-badge">Phase {number}</div>
      <h1>{title}</h1>
      {timeline && <p className="phase-timeline">⏱️ {timeline}</p>}
      {description && <p className="phase-description">{description}</p>}
    </div>
  )
}
