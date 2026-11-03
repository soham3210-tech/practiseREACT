import React from 'react'
import { useState, useEffect } from "react";
import './styles.css';
const index = () => {
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    const [skip, setskip] = useState(0);
    const [total, settotal] = useState(0);



    useEffect(() => {
        async function fetchimage() {
            setloading(true)
            const response = await fetch('https://dummyjson.com/products?limit=9&skip=0')
            const data = await response.json();
            setproduct(data.products);
            setloading(false);
            settotal(data.total);
        }

        fetchimage();

    }, [])



    return (

        <div>
            <div className='container'>
                {product.map((product) => (
                    <img src={product.thumbnail} alt={product.title} key={product.id} />
                ))}

            </div>

            <div className="loadmorebutton">
                <button>Load More</button>
            </div>


        </div>
    )
}

export default index
