import { useState } from "react";

import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball Z']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            {
                // Usualmente no vamos a tener explícito el =>{ return } ≡  => ( <>) este código es idéntico para especificar que estamos regresando el objeto.
                categories.map((category) => (

                    // Para enviar category como llave key= {category} y la categoría que está esperando igual al {category}
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}

export default GifExpertApp