
import Nav from './component/nav';
import Footer from './component/footer';
import './App.css';

import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import { Welc } from './component/welcome';
import { Next } from './pages/next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sent from './component/sent';
import Sec from './component/second';
import { Final } from './component/finally';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


function AppContent() {
  // Get the current route/path
  const location = useLocation();

  // Define which routes get dark background
  const darkBackgroundRoutes = ["/", "/next"];

  // Check if current path is in the list
  const isDarkBackground = darkBackgroundRoutes.includes(location.pathname);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkBackground ? "bg-white text-black" : "bg-black text-white"}`}>
      <div className="relative flex-grow">
        {isDarkBackground && (
          <>
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 bg-[url('./assets/new.jpg')]"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-none z-10" />
          </>
        )}

        {/* Main content */}
        <div className="relative z-20 flex flex-col min-h-screen">
          <Nav />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welc />} />
            <Route path='/sent' element={<Sent/>}/>
            <Route path='/next' element={<Next/>}/>
            <Route path="/second" element={<Sec/>}/>
            <Route path="/finally" element={<Final/>}/>
          </Routes>

          <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={isDarkBackground ? "dark" : "light"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}


export default App;


