import {BsFillCaretDownFill} from 'react-icons/bs'
import './index.css'

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="logo-container">
        <h1 className="logo">T M D B</h1>
      </div>
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-list-item active">Home</li>
          <li className="menu-list-item">Movies</li>
          <li className="menu-list-item">Series</li>
          <li className="menu-list-item">Popular</li>
          <li className="menu-list-item">Trends</li>
        </ul>
      </div>
      <div className="profile-container">
        <h1 className="">S</h1>
        <div className="profile-text-container">
          <span className="profile-text">Profile</span>
          <BsFillCaretDownFill />
        </div>
      </div>
    </div>
  </nav>
)
export default NavBar
