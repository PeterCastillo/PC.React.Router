import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

const App = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <Outlet/>
            </div>  
        </>
    )
}

export default App