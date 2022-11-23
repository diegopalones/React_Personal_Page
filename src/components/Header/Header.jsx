
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="App-header">
            <div><span>Diego Palones</span></div>
            <div className='links'>
                <span>
                    <Link to="/">Inicio</Link>
                    <Link to="/user">Contacto</Link>
                </span> 
            </div>            
        </nav>        
    )
}

export default Header
                              