
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import ApiURL from "../services/api";
import { toast } from "react-toastify";  // <-- Import toast here
export default function Sent() {
  const location = useLocation();
  const email = location.state?.email || "your-email@example.com";

  const handleResend = async() => {

  try {
      await axios.post(`${ApiURL}/api/welcome`, { email });
      toast.success("verification link sent succesfully")
     


    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send verification email.");
    }
  };

  const handleCreatePassword = () => {
    // TODO: Navigate or open password setup
    console.log("Create password clicked");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-white text-black">
      {/* Header */}
     

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
          alt="Envelope"
          className="w-16 h-16 mb-6"
        />

        <p className="text-sm text-gray-500 font-medium">Step 1 of 3</p>
        <h1 className="text-2xl font-bold my-2">Check your inbox</h1>
        <p className="text-md text-gray-700 mb-6">
          We sent a sign-up link to <span className="font-medium">{email}</span>. <br />
          Tap the link in the email to finish setting up your account.
        </p>

        <button
          onClick={handleResend}
          className="w-full max-w-sm bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded mb-4"
        >
          Resend Link
        </button>

        <button
          onClick={handleCreatePassword}
          className="w-full max-w-sm bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded"
        >
          Create Password Instead
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 w-full text-center text-sm text-gray-600 p-6 space-y-2">
        <p>
          Questions? <a href="#" className="text-blue-600 hover:underline">Contact us</a>
        </p>
        <div className="flex justify-center space-x-4 flex-wrap">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </footer>
    </div>
  );
}
