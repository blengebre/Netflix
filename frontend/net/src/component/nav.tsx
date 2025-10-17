// Nav.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Nav() {
  const [chan,setchan]=useState()
  const navigate=useNavigate()
  
  return (
    <nav className="flex justify-between items-center p-4  mb-3.5 h-16">
      <h1 className=" font-bold text-red-600 text-4xl ml-[200px] ">MYNETFLIX</h1>
      <ul className="flex gap-4 text-white">
          <Link to="/signup" className="border font-bold bg-red-500 rounded-2xl mr-[50px] p-2">Sign Up</Link>
      </ul>
    </nav>
  )
}


