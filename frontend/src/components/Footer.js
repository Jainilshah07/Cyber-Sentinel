import React from 'react'
// import logo from '../../assets/InitLogo.svg'
import whitelinkedin from '../assets/LinkedInWhite.svg'
import whiteinsta from '../assets/InstaWhite.svg'
// import whiteglobe from '../../assets/GlobeWhite.svg'
import sublist from '../assets/sublist.svg'
import line from '../assets/Line.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#4051a3] py-8'>
        <div className='row grid lg:grid-cols-12 grid-cols-1'>
        <div className="lg:col-span-3 lg:mb-2 lg:mt-1 mt-4">
            <div className="row">
              <div className='text-white text-center mb-2 text-xl font-semibold'>About Us</div>
            </div>
            <div className="row">
                {/* <img src={logo} className="mx-auto" alt="" /> */}
            </div>
        </div>

        <div className="lg:col-span-3 lg:mt-1 mt-8">
            <p className='text-white text-center text-xl pb-2 font-semibold'>Navigation</p>
            <div className="row grid grid-cols-2 mt-8 font-medium place-content-center">
                <div className="col-span-1 mx-auto">
                    <ul className='list-none text-white'>
                      <Link to="/"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Home</span> </li></Link>
                      <Link to="/events/data-2-knowledge"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Events</span> </li></Link>
                      <Link to="/ourteam"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Our Team</span> </li></Link>
                    </ul>
                </div>
                <div className="col-span-1 mx-auto">
                    <ul className='list-none text-white'>
                      <Link to="/events/blogs/all"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Blogs</span> </li></Link>
                      <Link to="/beginner's-guide"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Guide</span> </li></Link>
                      <Link to="/events/data-2-knowledge"><li className='flex mb-2'> <img src={sublist} alt="" /> <span className='pl-2'> Data 2 Knowledge</span> </li></Link>
                    </ul>
                </div>
            </div>
        </div>

        <div className="lg:col-span-3 text-white lg:mt-1 mt-8">
            <p className='pb-2 text-center text-xl font-semibold'>Location</p>
            <div className="flex font-medium">
              <img src={line} className="object-left lg:block sm:hidden" alt="" />
              <p className='text-center pt-8 px-auto'>
              Dwarkadas J. Sanghvi College of Engineering <br /> No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada, JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056
              </p>
            </div>
            
        </div>

        <div className="lg:col-span-2 lg:mt-1 mt-8">
            <p className='text-white text-center font-semibold text-xl mb-4'>Follow Us</p>
            <div className="row flex justify-center py-3">
                <div className="px-3">
                    <Link to="https://www.linkedin.com/company/init-ai/mycompany/" target="_blank"> <img src={whitelinkedin} alt="" /> </Link>
                </div>
                <div className="px-3">
                    <Link to="https://www.instagram.com/djinit.ai/" target="_blank"></Link><img src={whiteinsta} alt="" />
                </div>

            </div>
        </div>

    </div>
    </div>
    
  )
}

export default Footer
