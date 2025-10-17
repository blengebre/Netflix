import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ApiURL from "../services/api";
import { toast } from "react-toastify";  // <-- Import toast here
export function Welc() {
  const location = useLocation();
  const email = location.state?.email;
  const navigate=useNavigate()

  const handleSendLink = async () => {
    try {
      await axios.post(`${ApiURL}/api/welcome`, { email });
      toast.success("verification link sent succesfully")
     


      setTimeout(() => {
      navigate('/sent', { state: { email } }); // ✅ pass data like email, not functions
    }, 1000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send verification email.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-10">
      <img src="/netflix-logo.png" alt="Netflix" className="h-10 mb-8" />

      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-gray-500">Step 1 of 3</p>
        <h1 className="text-2xl md:text-3xl font-bold my-4">Finish setting up your account</h1>
        <p className="text-md mb-4">
          We'll send a sign-up link to <strong>{email}</strong> so you can use Netflix without a password on any device at any time.
        </p>

        <div className="flex items-center justify-center mb-4">
          <input type="checkbox" id="offers" className="mr-2" />
          <label htmlFor="offers" className="text-sm text-gray-600">Please do not email me Netflix special offers.</label>
        </div>

        <button
          onClick={handleSendLink}
          className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-6 py-3 rounded"
        >
          Send Link
        </button>
        
      </div>
    </div>
  );
}
