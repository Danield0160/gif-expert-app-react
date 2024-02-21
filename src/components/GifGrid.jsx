import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({ category }) => {
    // Usamos useState para crear el estado inicial para los GIFs.
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        // Llamamos a getGifs y actualizamos el estado cuando obtenemos la respuesta.
        getGifs(category).then(setGifs);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            {/* Renderizamos los GIFs como imágenes */}
            <div className="gif-grid">
                {gifs.map((gif) => (
                    <div key={gif.id} className="gif">
                        <img src={gif.url} alt={gif.title} />
                        <p>{gif.title}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default GifGrid;