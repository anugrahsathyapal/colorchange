import React, { useState } from 'react'

const Color = () => {


    const [color,setcolor] = useState("black")
  return (
    <>
        <div style={{backgroundColor:color,minHeight:"100vh",width:"100%"}} className=' d-flex flex-column align-items-center justify-content-between'>
            <h2 className='text-center text-white fw-bolder p-5 '>BACKGROUND COLOUR CHANGE</h2>
           <div className='text-center  border border-3 rounded-5 w-50 p-5 mb-5'>
                <h3 className='text-white'>Select any color from below !!!!!!!</h3>
                <div  className='p-5 '>
                    <button className='btn btn-outline-light btn1 me-3' onClick={()=>{setcolor("red")}} >Red</button>
                    <button className='btn btn-outline-light  btn3 me-3' onClick={()=>{setcolor("blue")}} >Blue</button>
                    <button className='btn btn-outline-light btn4 me-3' onClick={()=>{setcolor("green")}} >Green</button>
                    <button className='btn btn-outline-light btn5 me-3' onClick={()=>{setcolor("purple")}} >Purple</button>
                </div>
           </div>
        </div>

    
    
    
    </>
  )
}

export default Color