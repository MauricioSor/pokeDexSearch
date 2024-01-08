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
    
    enviarBusquedaPokemon(value).then((resp)=>{
      console.log(resp)
      if(resp.status==200){
        console.log(resp.data);
        setPokemon([resp]);
      }else{
        console.log("Error de servidor")
      }
      setBusqueda(false)
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
    </>
  )
}

export default App
