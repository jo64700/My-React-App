import React from 'react';

const PokemonCard = ({ name, imgSrc }) => {
    return (
        <figure className="card">
            {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
            <figcaption>{name}</figcaption>
        </figure>
    );
};

export default PokemonCard;
