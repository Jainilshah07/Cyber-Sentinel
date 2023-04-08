import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
// import login from "../../assets/login_bg.png";
import google from "../../assets/google.svg";
import github from "../../assets/github.svg";
// import axios from '../../axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const InputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const user = {password : input.password ,username:input.username}
    try {
      if(user){
        // const res = await axios.post("/user/login", user);
        // console.log(res.data);
        // localStorage.setItem("token",res.data.token)
        // localStorage.setItem("id",res.data._id)
        // console.log('token',res.data.token);
        navigate("/")
      }
    }catch(error) {
      console.log("error form content", error)
    }

    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={SubmitHandler}>
        {/* <div style={{backgroundImage: `url(${login})`,backgroundSize:"cover"}} className="font-libre text-gray-900 flex justify-center"> */}<div className="font-libre text-gray-900 flex justify-center">
          <div className=" sm:m-10 pb-10 rounded-3xl">
            <div className=" ">
              <div>
                <img src={logo} className="mx-auto transform hover:scale-125 transition duration-500 h-32 w-75" alt="" />
              </div>
              <div className="mt-14 flex flex-col items-center">
                <h1 className="text-2xl font-extrabold text-poppins text-black">
                  AgentTrace to stay safe
                </h1>
                <div className="w-full flex-1 mt-5">
                <div className="mx-auto mt-2 max-w-xs">
                    <input
                      name="username"
                      className="w-full px-8 py-2 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type="text"
                      placeholder="Username"
                      value={input.username}
                      onChange={InputHandler}
                      required
                    />
                    <input
                      name="password"
                      className="w-full px-8 py-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                      type="password"
                      placeholder="Password"
                      value={input.password}
                      onChange={InputHandler}
                      required
                    />
                    <button className="mt-3 tracking-wide font-semibold bg-[#0e0667] text-gray-100 w-full py-3 rounded-lg hover:bg-black transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                      {/* <img className="fill-white w-4 h-4 " "" /> */}
                      <span className="ml-3">Sign In</span>
                    </button>
                  </div><br></br>
                  <div className="flex flex-col items-center">
                    <div className="w-full max-w-s transform hover:scale-105 transition duration-500">
                      <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                        <div className="bg-white p-3 rounded-full">
                          <img className="w-5 transform hover:scale-150 transition duration-500" src={google} alt="" />
                        </div>
                        <span className="ml-4">Sign In with Google</span>
                      </button>
                    </div>
                    
                    <div className="w-full max-w-ss transform hover:scale-105 transition duration-500">
                    <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-2 bg-black text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                      <div className="bg-white p-2 rounded-full">
                        <img className="w-6 transform hover:scale-150 transition duration-500" src={github} alt="" />
                      </div>
                      <span className="ml-4">Sign In with GitHub</span>
                    </button>
                    </div>
                    
                  </div>

                  <div className="my-2 text-center">
                  <div className="flex mt-2">
                    <div className=" text-sm text-black mx-auto">
                        Don't have an account?{" "} 
                        <Link
                          to="/signup"
                          className="border-b border-gray-500 border-dotted"
                        >
                          Come Sign Up Now!
                        </Link>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
