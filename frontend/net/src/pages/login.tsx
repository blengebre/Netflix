
import { Link } from "react-router-dom";

function Login() {
  return <div className=" flex justify-center  ">
    <div className=" ml-[00px] mt-[50px] bg-black/80  backdrop-blur-none w-[500px] h-[700px]">
        <p  className="py-[60px] pl-[150px] text-5xl font-bold">Sign Up</p>
        <form  className="block  pl-[50px]" action="
        ">
         <div>
            <label htmlFor="" className="text-white pr-10 text-[20px] " >User Name</label> <input type="text" placeholder="password"/><br />
           
             <div className="mt-[20px]"><label htmlFor="" className="text-white  pr-14 text-[20px] " >Email</label>  <input type="email" className="ml-[35px]" placeholder="Email" required /></div></div> <br />
           <label htmlFor="" className="text-white pr-10 text-[20px] " >PassWord</label> <input type=" password" placeholder="password"/>
           
        </form>
         <button className="bg-red-600 text-white text-3xl px-[80px] py-3 mt-[50px] ml-[100px] rounded-2xl ">Register</button>
         <p className="mt-[30px] ml-14">Have an Account?  <Link to="/signup" className="text-blue-500">Signup</Link></p>
    </div>
  </div>;
}

export default Login;