import React from "react";
import heart from "../../assets/heart-svgrepo-com.svg";
import Analytics from "./Analytics";
import Landing from "./Landing";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#edf5fe] to-[#cee3fc]">
      <Landing />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-24 p-8">
        <div className="flex flex-col items-center">
          <div className="p-4 bg-yellow-200 rounded-full">
            <svg
              className="w-24 text-yellow-600 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-3xl mt-4 text-center">
            The Smartest Solution
          </h3>
          <p className="text-gray-700 text-xl text-center">
            It's like a lightbulb going on in your head!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-blue-200 rounded-full">
            <svg
              className="w-24 text-blue-600 animate-spin-slow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-3xl mt-4 text-center">
            Easily Configurable
          </h3>
          <p className="text-gray-700 text-xl text-center">
            No more struggling with complex settings
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-green-200 rounded-full">
            <svg
              className="w-24 text-green-600 animate-wiggle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
          </div>
          <h3 className="font-semibold text-3xl mt-4 text-center">
            Threat Intelligence
          </h3>
          <p className="text-gray-700 text-xl text-center">
            We will keep you updated
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="p-4 bg-pink-200 rounded-full">
            <img className="animate-beat w-20" src={heart} alt="" />
          </div>
          <h3 className="font-semibold text-3xl mt-4 text-center">
            Your Customers Will Love It
          </h3>
          <p className="text-gray-700 text-xl text-center">
            We can guarantee that!
          </p>
        </div>
      </div>

      <div className="py-20">
        <Analytics />
      </div>
    </div>
  );
};

export default Home;
