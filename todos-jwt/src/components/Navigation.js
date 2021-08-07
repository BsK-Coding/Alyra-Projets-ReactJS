import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="container">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home 🏡
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todos">
            Todos 📋
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Log in 🔓
          </Link>
        </li>

        <li className="nav-item ms-auto">
          <button className="nav-link btn btn-primary text-light">
            Log out 🔐
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
