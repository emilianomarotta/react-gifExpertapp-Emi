import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    // const categorias = ['One Punch', 'Samurai x', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Ese Titi']);
    //     setCategories ( cats => [...cats, 'HunterXHunter']);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category =>
                        //  <li key= {category}> {category }</li>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
            {/* <GifGrid category={categories}/> */}

            {/* <button onClick={ handleAdd }>Agregar</button> */}
        </>
    )

}