
import Nav from './component/nav';
import Footer from './component/footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
import Home from './pages/home';
import Login from './pages/login';
import { Welc } from './component/welcome';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sent from './component/sent';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Background Image Container */}
        <div className="relative flex-grow">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 bg-[url('./assets/new.jpg')]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-none z-10" />

          {/* Content */}
          <div className="relative z-20 flex flex-col min-h-screen">
            <Nav />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/welcome" element={<Welc />} />
              <Route path='/sent' element={<Sent/>}/>
            </Routes>

            {/* Toast notifications */}
            <ToastContainer 
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;


