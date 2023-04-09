import React, { useState } from "react";
import dream11 from '../../assets/Dream-11.svg'
import dream11 from '../../assets/Dream-11.svg'
import dream11 from '../../assets/Dream-11.svg'
import dream11 from '../../assets/Dream-11.svg'
import dream11 from '../../assets/Dream-11.svg'

const Investigation = () => {
    const [input, setInput] = useState({
        mobile: "",
        email: "",
      });
    
      const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInput({
          ...input,
          [name]: value,
        });
      };

      const submitHandler = ()=>{

      }
  return (
    <div>
      <div className="row">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-200 px-5 md:px-8">
            <div className="col-span-1 h-20 flex">
                <p className="my-auto font-semibold mx-auto">Mobile Number : </p>
                <input
                    name="mobile"
                    className="w-60 mx-8 my-auto h-10 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    placeholder="     Eg: 9356488888"
                    value={input.mobile}
                    onChange={InputHandler}
                    required
                />
            </div>
            <div className="col-span-1 h-20 flex">
                <p className="my-auto font-semibold mx-auto">Email ID : </p>
                <input
                    name="email"
                    className="w-60 mx-8 my-auto h-10 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="     Eg: johdoe@gmail.com"
                    value={input.email}
                    onChange={InputHandler}
                    required
                />
                
            </div>
            <div className="col-span-1 h-20 flex">
                <p className="my-auto font-semibold mx-auto">Submit For Investigation </p>
                <button onClick={submitHandler} className="my-auto h-10 tracking-wide font-semibold bg-[#0e0667] text-gray-100 w-40 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Submit</span>
                </button>
                
            </div>
        </div>
      </div>
      <div className="row">
        <p className="mx-auto">Big Handles</p>
        <div className="grid grid-cols-4 mx-6">
            <div className="col-span-1">
                <img src="" alt="" />
            </div>
        </div>
      </div>
      <div className="row">
        <p className="mx-auto">Big Handles</p>
        <div className="grid grid-cols-4 mx-6">
            <div className="col-span-1 mx-auto">
                <img className="w-40" src={dream11} alt="" />
                <p className="mx-auto">Dream 11</p>
            </div>
            <div className="col-span-1 mx-auto">
                <img className="w-40" src={dream11} alt="" />
                <p className="mx-auto">Dream 11</p>
            </div>
        </div>
      </div>
      <div className="row">
        <p className="mx-auto">Betting Websites</p>
        <div className="grid grid-cols-4 mx-6">
            <div className="col-span-1 mx-auto">
                <img className="w-40" src={dream11} alt="" />
                <p className="mx-auto">Dream 11</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Investigation
