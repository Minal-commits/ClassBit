import React, { useState } from 'react';
import LoginImage from '../../../assets/Login.png';
import { signIn } from '../../../supabase/Auth/supabaseLogin';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import PageLoader from '../../components/PageLoader';
import { toast, ToastContainer } from 'react-toastify';

const Login = ({ setOnSignInPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password) {
      toast.error('Please fill all the fields!');
      return;
    }
    setIsLoading(true);

    const result = await signIn(email, password);
    setIsLoading(false);

    if (result.success) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error(result.error);
      console.error('Login failedddddddddd:', result.error);
    }
  };

  return (
    <>
      <ToastContainer position='top-right' autoClose={4000}/>
      {isLoading ?<PageLoader /> : 
      <div className="w-full h-screen flex items-center justify-between gap-12 p-6 px-80">
        <Navbar />
        <div className="rounded-lg w-[50%]">
          <h1 className="text-4xl font-semibold mb-6 text-gray-800">
            Sign in to experience awesome things
          </h1>
          <form className="space-y-3 pt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium text-xl">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 py-2 border-b outline-none"
                placeholder="example@example.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium text-xl">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 py-2 border-b outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <p>
              New user?{' '}
              <span
                onClick={() => setOnSignInPage(false)}
                className="cursor-pointer underline text-blue-500"
              >
                Sign up
              </span>
            </p>
            <button
              type="submit"
              className="w-full mt-4 p-3 bg-[#101828] text-white rounded-lg cursor-pointer"
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="w-[40%]">
          <img src={LoginImage} alt="Login Illustration" className="w-full h-auto" />
        </div>
      </div>
      }
    </>
  );
};

export default Login;
