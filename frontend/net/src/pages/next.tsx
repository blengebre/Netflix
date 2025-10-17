import { Diameter } from "lucide";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

 export function Next(){
    const accountcreate=()=>{
        toast.success("Account created")
    }
    return(
<>
<div className="bg-transparent h-screen w-screen flex flex-col justify-center items-center text-center text-white">
      <p className="text-6xl font-bold">
        Unlimited movies, TV <br /> shows, and more
      </p>
      <p className="py-5 font-bold text-[20px]">
        Starts at USD 2.99. Cancel anytime.
      </p>
      <button  onClick={accountcreate} className="p-4 bg-red-700 text-black text-3xl font-bold"><Link to="/second">Finsh Sign up</Link></button>
      </div>
</>
    )
}