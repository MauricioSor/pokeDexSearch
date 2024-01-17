import { useState } from 'react'
import './App.css'
import Buscador from './components/views/Buscador'
import Pokemon from './components/views/Pokemon'
import LeyendaInicio from './components/views/LeyendaInicio'
import { enviarBusquedaPokemon } from './helpers/queries'
import Footer from './components/common/Footer'
import Swal from 'sweetalert2'

function App() {

  const [busqueda, setBusqueda] = useState(true)
  const [pokemon,setPokemon]=useState([])

  const busquedaPokemon =(value)=>{
    
    enviarBusquedaPokemon(value).then((resp)=>{
      if(resp.status==200){
        setPokemon([resp]);
        setBusqueda(false)
      }else{
        console.log("Error de servidor")
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No encontramos el pokemon que ingresaste :( Prueba con uno distinto!",
        });
      }
    })
  }
  
  return (
    <>
    
      {
        busqueda  ?
          (<LeyendaInicio />) :
          pokemon.map((item,index)=>(
            <Pokemon item={item} key={index} />
          ))
      }
      <Buscador busquedaPokemon={(value)=>busquedaPokemon(value)}/>
      <Footer/>
    </>
  )
}

export default App
