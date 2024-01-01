import React from 'react'

function Searchbutton({makeChange}) {
  return (
    <div className='text-center'>
        <input className="text-center mt-10 mb-3 text-sm border-0 w-24 h-8 rounded-md border-white" type='search' placeholder='Search' onChange={makeChange}/>
    </div>
  )
}

export default Searchbutton