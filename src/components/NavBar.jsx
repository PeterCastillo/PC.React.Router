import { Link , NavLink} from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"


const NavBar = () => {

    const { user } = useContext(UserContext)


    return (
        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/">{ user? "Conectado" : "Desconectado"}</Link>
                <NavLink to="/" className="btn btn-outline-primary">Inicio</NavLink>
                <NavLink to="/blog" className="btn btn-outline-primary">Blog</NavLink>
                <NavLink to="/contacto" className="btn btn-outline-primary">Contacto</NavLink>
            </div>
        </div>
    )
}

export default NavBar