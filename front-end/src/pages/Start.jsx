import React from 'react'
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1695066584644-5453334ff5ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMHNpZ25hbCUyMGxpZ2h0c3xlbnwwfDF8MHx8fDA%3D)] h-screen pt-8   w-full flex justify-between flex-col ">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
          
        />
        <div className=" bg-white pb-8 py-4 px-4">
          <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
