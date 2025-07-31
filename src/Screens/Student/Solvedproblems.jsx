import React from 'react'
import { useNavigate } from 'react-router-dom';

const Solvedproblems = ({solvedProblemsList}) => {
  const navigate = useNavigate();
  const handelNavigate = (problemID) => {
    console.log("navigating to: ", problemID);
    navigate(`/problem/${problemID}`);
  }
  return (
    <div className='w-full h-full'>
        {solvedProblemsList.map((problem, index) => (
          <div key={index} onClick={()=> handelNavigate(problem?.id)}>
            <div className='flex flex-row cursor-pointer justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4'>
              <div className='flex flex-col cursor-pointer'>
                <p className='text-blue-600 font-bold text-lg'>{problem?.ProblemName}</p>
                <p className='text-gray-500'>Difficulty: {problem?.Difficulty}</p>
                <p className='text-gray-500'>Topic: {problem?.ProblemTopic}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Solvedproblems