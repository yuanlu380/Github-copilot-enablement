import { useNavigate } from 'react-router-dom'

export default function PhaseNavigation({ prevPath, prevLabel, nextPath, nextLabel }) {
  const navigate = useNavigate()

  return (
    <div className="phase-navigation">
      {prevPath && (
        <button className="nav-btn nav-btn-prev" onClick={() => navigate(prevPath)}>
          ← {prevLabel || 'Previous'}
        </button>
      )}
      <div className="nav-spacer" />
      {nextPath && (
        <button className="nav-btn nav-btn-next" onClick={() => navigate(nextPath)}>
          {nextLabel || 'Next'} →
        </button>
      )}
    </div>
  )
}
