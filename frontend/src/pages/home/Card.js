import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="mx-8 md:mx-20 h-full bg-[#10075d] p-1">
            <div className="bg-[#3787ce] h-full p-3 md:p-4">
                <div><img className='bg-gray-200' src={props.image} alt="" /></div>
            <div className="row mb-1 text-center text-transparent font-bold text-base md:text-4xl bg-clip-text bg-gradient-to-r from-[#000000] to-[#041a23]">
                {props.number}
            </div>
            <div className="row py-2 text-center text-[#10075d] text-base md:text-2xl font-semibold">
                {props.content}
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Card
