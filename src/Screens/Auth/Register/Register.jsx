import React, { useState } from 'react';
import LoginImage from '../../../assets/Login.png';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { signUP } from '../../../supabase/Auth/supabaseRegister';
import PageLoader from '../../components/PageLoader';
import { toast, ToastContainer } from 'react-toastify';


const Register = ({ setOnSignInPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password || !name || !rollNo || !year) {
      toast.error('Please fill all the fields!');
      return;
    }
    setIsLoading(true);
    const result = await signUP({ email, password, name, rollNo, year });
  
    if (result.success) {
      toast.success('Signup successful! Please check your email for verification.');
      setOnSignInPage(true)
      navigate('/auth');
    } else {
      toast.error(result.error);
      console.error('Signup failed:', result.error);
    }
    setIsLoading(false);
  };

  return (
    <>
    {isLoading ? <PageLoader /> :
    <div className="w-full h-screen flex items-center justify-between gap-12 p-6 px-80">
      <Navbar/>
      <ToastContainer position='top-right' autoClose={6000}/>
      <div className="rounded-lg w-[50%]">
        <h1 className="text-4xl font-semibold mb-6 text-gray-800">
          Sign up to experience awesome things
        </h1>
        <form className="space-y-3 pt-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Email:</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 py-2 border-b outline-none" 
              placeholder="example@example.com"
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
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Name:</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 py-2 border-b outline-none" 
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Roll No.:</label>
            <input 
              type="text" 
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="mt-1 py-2 border-b outline-none" 
              placeholder="Enter your roll number"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium text-xl">Year:</label>
            <input 
              type="text" 
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-1 py-2 border-b outline-none" 
              placeholder="Enter your year"
            />
          </div>
          <p>
            Already have an account?{' '}
            <span 
              onClick={() => setOnSignInPage(true)} 
              className="cursor-pointer underline text-blue-500"
            >
              Sign in
            </span>
          </p>
          <button 
            type="submit" 
            className="w-full mt-4 p-3 bg-[#101828] text-white rounded-lg cursor-pointer"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-[40%]">
        <img src={LoginImage} alt="Login Illustration" className="w-full h-auto" />
      </div>
    </div>
    }
    </>
  );
};

export default Register;