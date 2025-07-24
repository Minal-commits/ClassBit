import React, { useEffect, useState } from 'react';
import TeacherHeader from './TeacherHeader.jsx';
import StudentsRankings from './StudentsRankings.jsx';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../supabase/Auth/fetchUser.js';
import { toast } from 'react-toastify';
import { getRankings } from '../../supabase/fetchDataBase/getRankings.js';

const Teacher = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUser();
      const userRole = userData?.user_metadata?.role || null;

      if (userRole !== 'teacher') {
        toast.error('You are not authorized to access this page. Redirecting to login page.');
        navigate('/');
        return;
      }

      const fetchedStudents = await getRankings();
      if (fetchedStudents) {
        setStudents(fetchedStudents);
      }
    };

    fetchData();
  }, [navigate]);

  const handleClick = () => {
    navigate('/createAProblem');
  };

  return (
    <div className="w-full pt-[9vh]">
      <TeacherHeader handleClick={handleClick} teacherName="Minal" />
      <StudentsRankings students={students} />
    </div>
  );
};

export default Teacher;
