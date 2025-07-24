import React, { useEffect } from 'react';
import CreateAProblemHeader from './CreateAProblemHeader';
import CreateAProblemForm from './CreateAProblemForm';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../supabase/Auth/fetchUser';

const CreateAProblem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();

      const userRole = userData?.user_metadata?.role || null;

      if (userRole !== 'teacher') {
        navigate('/auth');
      }
    };

    getUser();
  }, [navigate]);

  return (
    <div className="w-full min-h-[85vh] mt-[8vh]">
      <CreateAProblemHeader />
      <CreateAProblemForm />
    </div>
  );
};

export default CreateAProblem;
