import React from 'react'

function Seperator({text}) {
  return (
    <div className="text-center text-lg font-semibold mt-24 mb-12">
        <div className="relative group inline-block">
          <span className="text-white transition-colors duration-300">
            {text}
          </span>

          <span
            className="absolute left-0 -bottom-1 h-[2px] w-full 
      bg-gradient-to-r from-blue-500 to-purple-500 
      
      scale-x-100"
          />
        </div>
      </div>
  )
}

export default Seperator