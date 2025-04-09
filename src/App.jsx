import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Screens/components/Navbar';
import Footer from './Screens/components/Footer';
import { fetchUser } from './supabase/Auth/fetchUser';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const location = useLocation();
  const isProblemPage = location.pathname.startsWith('/problem');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      if (!userData) {
        navigate('/auth');
      }
      setLoading(false);
    };

    getUser();
  }, [navigate]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading user...</p>
      </div>
    );
  }

  return (
      <div className={`w-full h-full bg-[#FBFBFB] font-outfit ${isProblemPage ? 'px-0' : 'px-80'}`}>
        <Navbar />
        <Outlet />
        {!isProblemPage && <Footer />}
      </div>
  );
};

export default App;
