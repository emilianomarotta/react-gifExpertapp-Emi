import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs'

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])
    const { data:images, loading } = useFetchGifs(category);


    // // Se usa para renderizar por unica vez
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])





    //Esto se llamaria cada vez que se ejecuta algo, por eso deberiamos usar el useEffect
    //getGifs();
    return (
        <>
            <h3 className="animate__animated animate__rollIn">{category}</h3>
            {loading && <p> Loading </p>}
            <div className="card-grid">
                {
                    // Recibe la lista de imagenes de la funcion getGifs, hace la desestructuracion de id y title
                    // Con el .map se recorre el array que se cargo usando el setImages
                    images.map(img =>
                        // <li key={id}>{title}</li>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
