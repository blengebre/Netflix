import axios from "axios";
import ApiURL from "../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";  // <-- Import toast here

function Home() {
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

 const handleGetStarted = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    try {
      const response = await axios.post(`${ApiURL}/api/register`, {
        email: newEmail,
        username: newUsername,
        password: newPassword,
      });

      console.log('User registered successfully:', response.data);
     
      
      toast.success('User registered successfully!'); // <-- nice success toast
      
      // Delay navigation a bit so user can see the toast, optional:
      setTimeout(() => {
        navigate('/welcome', { state: { email: newEmail } });
      }, 1500);

    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Check console for details.'); // <-- error toast
    }
  };

  return (
    <div className="bg-transparent h-screen w-screen flex flex-col justify-center items-center text-center text-white">
      <p className="text-6xl font-bold">
        Unlimited movies, TV <br /> shows, and more
      </p>
      <p className="py-5 font-bold text-[20px]">
        Starts at USD 2.99. Cancel anytime.
      </p>
      <p className="font-bold">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
     
      <form onSubmit={handleGetStarted} className="flex mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-white/40 p-4 w-[300px] bg-white/10 text-white placeholder-gray-300 focus:outline-none rounded"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your username"
          className="border border-white/40 p-4 w-[300px] bg-white/10 text-white placeholder-gray-300 focus:outline-none rounded ml-2"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="border border-white/40 p-4 w-[300px] bg-white/10 text-white placeholder-gray-300 focus:outline-none rounded ml-2"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button
          type="submit"
          className="ml-3 rounded bg-red-700 text-2xl text-white px-6 py-3 font-bold hover:bg-red-800 transition"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}

export default Home;
