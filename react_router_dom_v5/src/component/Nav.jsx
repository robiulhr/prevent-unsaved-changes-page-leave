import { Link } from 'react-router-dom'
export default function Nav ({ confirmPageLeaveHandler }) {
  return (
    <nav>
      <Link
        onClick={() => {
          confirmPageLeaveHandler && confirmPageLeaveHandler()
        }}
        to={'/'}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          confirmPageLeaveHandler && confirmPageLeaveHandler()
        }}
        to={'/profile'}
      >
        Profile
      </Link>
    </nav>
  )
}
