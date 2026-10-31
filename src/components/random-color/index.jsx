import React from 'react'
import { useState } from 'react'
import './style.css'
const index = () => {
  const [typeofcolor, settypeofcolor] = useState("hex")
  const [color, setcolor] = useState("#000000")
  function handlecreatehexcolor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#"

    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * 16)
      hexcolor += hex[random];
      setcolor(hexcolor)
    }
    console.log(hexcolor);

  }
  function handlecreatergbcolor() {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    setcolor(`rgb(${r},${g},${b})`)


  }

  return (
    <div className='container'
      style={{ backgroundColor: color }}>
      <button onClick={() => settypeofcolor('hex')}>Create HEX color </button>
      <button onClick={() => settypeofcolor('rgb')}>Create RGB color </button>
      <button onClick={typeofcolor === 'hex' ? handlecreatehexcolor : handlecreatergbcolor}>Generate Random Color </button>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontSize: "60px",
        marginTop: "30px",


      }}>
        <h3>{typeofcolor === "hex" ? "Hexcolor" : "rgbcolor"}</h3>
        <h1>{color}</h1>
      </div>





    </div>
  )
}

export default index
