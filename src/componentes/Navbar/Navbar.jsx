import CardWidget from '../CardWidget/CardWidget'
import './Navbar.css'


const Navbar = () => {
  return (
    <header>
        <h1>Marolio Online</h1>

        <nav>
            <ul>
                <li>lacteos</li>
                <li>limpieza</li>
                <li>almacen</li>
            </ul>
        </nav>

        <CardWidget/>
    </header>
  )
}

export default Navbar