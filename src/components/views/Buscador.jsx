import React, { useState } from 'react';
import { Form ,Button} from 'react-bootstrap';

const Buscador = ({busquedaPokemon}) => {
    const [texto,setTexto]=useState();

    const onChangeInput=(e)=>{
        e.preventDefault()
        setTexto(e.target.value);
    }
    return (
        <div>
            
            <input type="text" aria-label='Pj. Pikachu...' onChange={onChangeInput}/>
            <Button type="subtmit" variant='warning' onClick={()=>{busquedaPokemon(texto)}}>Buscar</Button>
            
        </div>
    );
};

export default Buscador;