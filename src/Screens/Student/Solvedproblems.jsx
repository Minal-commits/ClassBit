import React from 'react'

const Solvedproblems = ({solvedProblemsList}) => {
  return (
    <div className='bg-amber-50 w-full h-full'>
        {solvedProblemsList.map((problem, index) => (
          <div key={index}>
            <div className='flex flex-row cursor-pointer justify-between items-center bg-white shadow-md rounded-lg p-4 mb-4'>
              <div className='flex flex-col cursor-pointer'>
                <a href={problem.problemLink} target="_blank" rel="noopener noreferrer" className='text-blue-600 font-bold text-lg'>{problem.problemName}</a>
                <p className='text-gray-500'>Difficulty: {problem.problemDifficulty}</p>
                <p className='text-gray-500'>Status: {problem.problemStatus}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Solvedproblems