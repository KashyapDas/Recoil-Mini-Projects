import React from 'react'

function NotFound() {
  console.log("NotFound Render");

  return (
    <div className='w-screen h-[80vh] bg-yellow-400 flex items-center justify-center'>
        <h1 className='text-4xl font-extrabold'>No To Found...</h1>
    </div>
  )
}

export default NotFound
