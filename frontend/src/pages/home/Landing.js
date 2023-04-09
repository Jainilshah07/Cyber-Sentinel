import React from 'react'
import cyber from '../../assets/cyber.png'

const Landing = () => {
  return (
    <div>
      <div className='overflow-hidden'>
      <div className="row grid grid-cols-10">
        <div className="lg:col-span-3 lg:ml-12 lg:visible invisible">
            <img className='my-12' src={cyber} alt="" />
        </div>
        <div className="lg:col-span-7 lg:mt-16 lg:mx-12 col-span-8">
            <p className='text-[#C71A03] lg:ml-60 font-["Montserrat"] sm:text-[40px] text-2xl font-bold lg:text-left text-center'>Our Mission</p>
            <p className='lg:mt-8 sm:text-2xl text-lg font-light lg:text-left text-justify'>Cybersecurity is the protection of internet-connected systems such as hardware, software and data from cyberthreats. The practice is used by individuals and enterprises to protect against unauthorized access to data centers and other computerized systems. </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Landing
