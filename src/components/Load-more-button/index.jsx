import React from 'react'
import { useState, useEffect } from "react";
import './styles.css';
const index = () => {
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    const [skip, setskip] = useState(0);
    const [total, settotal] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchimage() {
            setloading(true);

            try {
                const response = await fetch(
                    `https://dummyjson.com/products?limit=9&skip=${skip}`,
                    { signal: controller.signal }
                );

                const data = await response.json();

                setproduct((prev) => [...prev, ...data.products]);
                settotal(99);

            } catch (error) {
                if (error.name !== "AbortError") {
                    console.log(error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setloading(false);
                }
            }
        }

        fetchimage();

        return () => {
            controller.abort();
        };

    }, [skip]);

    function handleloadmore() {
        setskip(skip + 9);

    }

    return (

        <div>
            <div className='container'>

                {loading == true ? (<h1>Loading</h1>) :
                    (<>{
                        product.map((product) => (
                            <img src={product.thumbnail} alt={product.title} key={product.id} />
                        ))
                    }
                        {total <= product.length ? (<h1>stock finished</h1>
                        ) : (
                            < div className="loadmore">
                                <button onClick={handleloadmore}>Load More</button>
                            </div>
                        )
                        }
                    </>

                    )
                }
            </div>




        </div >
    )
}

export default index
