import React, {useState} from 'react'

const useCounter = () => {
    const [id, setId] = useState(1);

    const increment = () => {
        setId((prevId) => prevId + 1)
    }

    const decrement = () => {
        if(id > 1){
            setId((prevId) => prevId - 1)
        }
    }


  return {id, increment, decrement}
}

export default useCounter