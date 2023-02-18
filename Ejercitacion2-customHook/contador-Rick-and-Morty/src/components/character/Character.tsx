import React, { useState,useEffect } from "react";
import axios from 'axios'
import useCounter from "../../hooks/useCounter";


const Character = () => {
    const [character, setCharacter] = useState(null);
    const {id, increment, decrement} = useCounter();


    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => {
            setCharacter(res.data.image);
        }); 
    }, [id])

    if(!character) return null;

  return (
    <>
      <div>
        <img  src={character} alt='' />
      </div>
      <div>
        <button onClick={decrement}>anterior</button>
        <button onClick={increment}>siguiente</button>
      </div>
    </>
  );
};

export default Character;
