import axios from "axios"


export const enviarBusquedaPokemon = async(pokemon)=>{
    try {
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return respuesta = JSON.parse(resp);
    } catch (error) {
        console.log(error)
    }
}