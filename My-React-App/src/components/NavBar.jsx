import React from 'react';




function NavBar({ count, setCount, pokemonList }) {

    const handleClickNext = () => {
        setCount(count + 1)
    }
    const handleClickPrevious = () => {
        setCount(count - 1)
    }

    return (
        <div>
            {count > 0 ? <button onClick={handleClickPrevious}>précédant</button> : <button>dernier</button>}
            {count < pokemonList.length - 1 ? <button onClick={handleClickNext}>suivant</button> : <button>Fin</button>}
        </div>
    )
}

export default NavBar;