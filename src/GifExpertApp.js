import React, {useState} from 'react';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(item => (
                        <GifGrid 
                            key={item}
                            category={item}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;