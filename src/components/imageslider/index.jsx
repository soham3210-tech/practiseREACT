import React from 'react'
import { useState, useEffect } from 'react'
import './styles.css'
const index = () => {
    const [images, setimages] = useState([])
    const [currentindex, setcurrentindex] = useState(0)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        async function fetchimages() {
            setloading(true)
            const response = await fetch("https://picsum.photos/v2/list?page=1&limit=5");
            const data = await response.json();
            setimages(data);
            setloading(false);

        }
        fetchimages();
    }, []);


    function handleprevious() {
        if (currentindex === 0) {
            setcurrentindex(images.length - 1)
        } else {
            setcurrentindex(currentindex - 1);
        }
    }
    function handlenext() {
        if (currentindex === 4) {
            setcurrentindex(0)
        } else {
            setcurrentindex(currentindex + 1)
        }
    }
    return (
        <div className='container'>
            {loading === true ? (<h1>LOADING</h1>) : (
                <img key={images[currentindex]?.id} src={images[currentindex]?.download_url} alt="Random" width="200" />)}
            <div className='indicator'>
                <span className={currentindex === 0 ? 'active' : 'inactive'}></span>
                <span className={currentindex === 1 ? 'active' : 'inactive'}></span>
                <span className={currentindex === 2 ? 'active' : 'inactive'}></span>
                <span className={currentindex === 3 ? 'active' : 'inactive'}></span>
                <span className={currentindex === 4 ? 'active' : 'inactive'}></span>

            </div>
            <div className="arrow" >
                <span onClick={handleprevious}>{'<'}</span>
                <span onClick={handlenext}>{'>'}</span>
            </div>
        </div>
    )
}

export default index
