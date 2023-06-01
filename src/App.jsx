import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import ItemlistContainer from './componentes/ItemListContainer/ItemlistContainer'


function App() {
  return (
    <>
      <Navbar/>
      <ItemlistContainer greeting={"Hola comision"}/>
    </>
  )
}

export default App
