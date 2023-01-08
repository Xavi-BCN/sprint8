import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <ul className="nav nav-tabs center">
            <li className="nav-item">
            <Link to={"/Wellcome"} className="nav-link" style={{ color: 'white' }} >HOME</Link>
            </li>
            <li className="nav-item">
                <Link to={"/Starships"} className="nav-link" style={{ color: 'white' }}>STARSHIPS</Link>
            </li>
        </ul>
    )
}