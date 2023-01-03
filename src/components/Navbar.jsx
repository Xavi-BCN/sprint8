import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <ul className="nav nav-tabs center">
            <li className="nav-item">
            <Link to={"/"} className="nav-link" >HOME</Link>
            </li>
            <li className="nav-item">
                <Link to={"/Starships"} className="nav-link" >STARSHIPS</Link>
            </li>
        </ul>
    )
}