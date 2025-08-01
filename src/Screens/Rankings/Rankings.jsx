import React, { useEffect, useState } from 'react'
import StudentsRankings from '../components/StudentsRankings'
import { getRankings } from '../../supabase/fetchDataBase/getRankings';
import PageLoader from '../components/PageLoader';

const Rankings = () => {
  const [studentRankings, setStudentRankings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getStudentRankings = async () => {
    setIsLoading(true);
    const fetchedStudents = await getRankings();
    console.log(fetchedStudents)

    if (fetchedStudents.length > 0) {
      setStudentRankings(fetchedStudents);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getStudentRankings();
  }, []);

  if(isLoading) return <PageLoader/>

  return (
    <div className='w-full pt-[9vh]'>
        <h1 className='text-3xl font-bold text-center mt-5'>Student Rankings</h1>
        <StudentsRankings students={studentRankings} />
    </div>
  )
}

export default Rankings