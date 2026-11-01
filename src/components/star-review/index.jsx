import React from 'react'
import { useState } from "react";
import { FaStar } from 'react-icons/fa'
import './styles.css'
const starrating = ({ noofstars }) => {
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(0)
    function handleclick(getcurrentindex) {

        setrating(getcurrentindex)

    }
    function handlemouseenter(getcurrentindex) {

        sethover(getcurrentindex)
    }
    function handlemouseleave() {
        sethover(rating)
    }
    return (

        <div className='star-rating'>
            {[...Array(noofstars)].map((_, index) => {//creating the array with noofstars which can be like 5 value of noofstar and ... is used for making the 5 emptyarray slot created after that with placing undefined then .map is used to iterate till no ofstar to return upto noofstar completed....
                index += 1
                return <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => { handleclick(index) }}
                    onMouseMove={() => { handlemouseenter(index) }}
                    onMouseLeave={() => { handlemouseleave(index) }}
                    size={40}

                />
            })}

            {/*first event function then function inside the function usestate is kept so that state will update according it then logic of classname is updated .....*/}
        </div>
    )
}

export default starrating
