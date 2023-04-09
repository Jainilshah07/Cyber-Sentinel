import React, { useState } from "react";
import dream11 from '../../assets/Dream-11.svg'
import bumble from '../../assets/bumble.svg'
import tinder from '../../assets/tinder.svg'
import microsoft from '../../assets/microsoft.svg'
import googlecolor from '../../assets/google-color.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Table from "./Table";
import RePieChart from "./Piechart";
import axios from 'axios';


const Investigation = () => {
    const [input, setInput] = useState({
        mobile: "",
        email: "",
      });
    const [response, setResponse] = useState({})
    
      const InputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
    
        setInput({
          ...input,
          [name]: value,
        });
      };

      const submitHandler = async (e)=>{
        e.preventDefault();
    const usermobile = {mobile:input.mobile}
    const useremail = {email:input.email}
    try {
      if(usermobile){
        const res = await axios.post("http://127.0.0.1:5000/api/instagram", useremail);
        // setResponse(...response, {instagram : res.data.register} )
        const newData = {
            instagram: res.data.register
        }
        setResponse(...response, newData)
        console.log("insta",res.data.register);
        

        const res2 = await axios.post("http://127.0.0.1:5000/api/truecaller", useremail);
        console.log(res2.data);
        // const res3 = await axios.post("http://127.0.0.1:5000/api/whatsapp", usermobile);
        // console.log(res3.data);
      }
    }catch(error) {
      console.log("error form content", error)
    }

    setInput({
      email: "",
      mobile: "",
    });
      }
  return (
    <div>
      <div className="row border-b-2 border-black">
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

      <div className="grid col-span-2 lg:grid-cols-3">
        <div className="col-span-2">
        <div className="row">
        <div className="flex justify-center">
            <div className="flex items-center lg:mx-40 my-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">Cloud Handles</label>
        </div>
      </div>
        <div className="grid grid-cols-3 mx-6">
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={microsoft} alt="" />
                <p className="text-center my-2">Office 365</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={googlecolor} alt="" />
                <p className="text-center my-2">Google</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={microsoft} alt="" />
                <p className="text-center my-2">Office 365</p>
            </div>
        </div>
      </div>
      <div className="h-[1px] bg-black ml-4" ></div>

      <div className="row">
        <div className="flex justify-center">
            <div className="flex items-center lg:mx-40 my-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">Social Media</label>
        </div>
      </div>
        
        <div className="grid grid-cols-4 mx-6">
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={whatsapp} alt="" />
                <p className="text-center my-2">Whatsapp</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={facebook} alt="" />
                <p className="text-center my-2">Facebook</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={instagram} alt="" />
                <p className="text-center my-2">Instagram</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={telegram} alt="" />
                <p className="text-center my-2">Telegram</p>
            </div>
        </div>
      </div>
      <div className="h-[1px] bg-black ml-4" ></div>

      <div className="row">
      <div className="flex justify-center">
            <div className="flex items-center lg:mx-40 my-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-checkbox" className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-600">Dating/Betting Handles</label>
        </div>
      </div>

        <div className="grid grid-cols-3 mx-6">
            <div className="col-span-1">
                <img className="w-12 h-12 mx-auto" src={dream11} alt="" />
                <p className="text-center my-2">Dream 11</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={tinder} alt="" />
                <p className="text-center my-2">Tinder</p>
            </div>
            <div className="col-span-1">
                <img className="w-12 mx-auto" src={bumble} alt="" />
                <p className="text-center my-2">Bumble</p>
            </div>
        </div>
      </div>
      <div className="h-[1px] bg-black ml-4" ></div>
        </div>

        <div className="col-span-2 lg:col-span-1 my-5">
        <table className="table-auto mx-auto font-bold border-spacing-x-1 border-separate my-2 ">
          <thead>
            <tr>
              <th className=" border border-slate-600 mx-2 md:px-8">Website/App</th>
              <th className=" border border-slate-600 mx-2 md:px-8">Registered or not?</th>
            </tr>
          </thead>
          {Object.keys(response).map((data,index) => {
              return (
                <>
                  <tr key={index} className="my-2">
                    <td className="border border-slate-600 mx-2 md:px-8">{data}</td>
                    <td className="border border-slate-600 mx-2 md:px-8">{response.data}</td>
                  </tr>
                </>
              );
              })}
        </table>
        </div>

      </div>

      <div className="grid col-span-1 lg:col-span-2">
        <RePieChart/>
      </div>
      
    </div>
  )
}

export default Investigation
