import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/Navbar/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    <>
    <div>
      <NavBar/>
      <ItemListContainer greeting='Saludos app'/>
      
      

    </div>
    </>
  )
}
export default App
// ItemListContainer(home)
// NavBar
// CartWidget
