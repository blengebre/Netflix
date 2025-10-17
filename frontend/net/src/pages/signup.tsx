import { Link } from "react-router-dom";
import { useState } from "react";
function Signup() {
    const[get,setget] = useState([])

  return <div className=" flex justify-center  ">
    <div className=" ml-[00px] mt-[50px] bg-black/50  backdrop-blur-none w-[500px] h-[700px]">
        <p  className="py-[60px] pl-[150px] text-5xl font-bold">Sign Up</p>
        <form  className="block  pl-[50px]" action="
        ">
         <div>   <input className=" bg-white/15 backdrop-blur-sm w-[300px] py-3 pl-1" type="email" placeholder="Email" required /></div> <br />
           <input  className=" bg-white/15 backdrop-blur-sm w-[300px] py-3 pl-1" type=" password" placeholder="password"/>
           
        </form>
         <button className="bg-red-600 text-white text-3xl px-[150px] py-1 mt-[20px] ml-[50px]  rounded-[5px] ">Login</button>
         <p className=" ml-[200px]  text-2xl font-bold">
        or
         </p>
         <button className=" bg-white/15 backdrop-blur-sm ml-[50px] py-3 px-31">Use a Sign in code</button>
         <p className="mt-[30px] ml-14">Do`t have an Accout <Link to="/" className="text-blue-500">Create Account</Link></p>
    </div>
  </div>;
}

export default Signup;