import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        if(categories.includes(newCategory))return;
        
        setCategories([newCategory]);
        // setCategories([...categories, 'Boku no hero']);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory = {(value)=> onAddCategory(value)}>
            </AddCategory>
            {
                categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                )
            }
        </>
    )
}

