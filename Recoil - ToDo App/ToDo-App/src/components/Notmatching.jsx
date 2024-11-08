import React from 'react'

function Notmatching() {
  console.log("Notmatching Render");

  return (
    <div className='w-screen h-[80vh] flex items-center justify-center'>
        <h1 className='text-4xl font-extrabold text-red-600'>Element Not Found...</h1>
    </div>
  )
}

export default Notmatching
