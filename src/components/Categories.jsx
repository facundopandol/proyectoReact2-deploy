import { Link } from "react-router-dom";

export const Categories = () => {
    return (
        <ul className="navbar-nav mx-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link text-white">
                    <button className="text-black px-4 py-2 rounded flex items-center mr-2 border-0 bg-transparent">Inicio</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/category/sahumerio'} className="nav-link text-white">
                    <button className="text-black px-4 py-2 rounded flex items-center mr-2 border-0 bg-transparent">Sahumerios</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/category/vela'} className="nav-link text-white">
                    <button className="text-black px-4 py-2 rounded flex items-center border-0 bg-transparent">Velas</button>
                </Link>
            </li>
        </ul>
    )
}
