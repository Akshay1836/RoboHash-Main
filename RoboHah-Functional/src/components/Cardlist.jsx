import React from 'react'

function Cardlist({data}) {
  return (
    <div className='w-48 h-32 bg-card m-1'>
        <h1 className='p-4 text-3xl text-center'>{data}</h1>
        <img src="" alt="" className='w-24' />
    </div>
  )
}

export default Cardlist