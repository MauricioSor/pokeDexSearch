import { useState } from 'react'
import './App.css'
import Buscador from './components/Buscador'
import Pokemon from './components/Pokemon'
import LeyendaInicio from './components/LeyendaInicio'
import { enviarBusquedaPokemon } from './helpers/queries'

function App() {

  const [busqueda, setBusqueda] = useState(true)
  const [pokemon,setPokemon]=useState([])

  const busquedaPokemon =(value)=>{
    setBusqueda(false)
    enviarBusquedaPokemon(value).then((resp)=>{
      if(resp.status==200){
        console.log(resp.data);
        setPokemon(resp.status);
      }else{
        console.log("Error de servidor")
      }
    })
  }
  
  return (
    <>
      {
        busqueda  ?
          (<LeyendaInicio />) :
          pokemon.map(item=>(
            <Pokemon item={item} key={item.id} />
          ))
      }
      <Buscador busquedaPokemon={(value)=>busquedaPokemon(value)}/>
    </>
  )
}

export default App