import React from 'react'

const Grid: React.FC=()=> {
  return (
    <div className=''>
<h1 className="text-center   font-bold text-4xl p-4  text-green">
  GRID SYSTEM
</h1>
      <div className="grid grid-cols-12 gap-4">
  <div className="col-span-4 bg-blue-500 p-4 text-white">4/12</div>
  <div className="col-span-4 bg-red-500 p-4 text-white">4/12</div>
  <div className="col-span-4 bg-green-500 p-4 text-white">4/12</div>
</div>

    </div>
  )
}

export default Grid