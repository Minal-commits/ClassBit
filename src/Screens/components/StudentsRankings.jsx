import React, { useEffect } from 'react'

const StudentsRankings = ({students}) => {
  useEffect(()=> {
    console.log(students);
  })
  return (
    <div className='w-full bg-green-200 mt-8 min-h-[65vh] rounded-md my-5'>
      <div className='w-full flex justify-between text-xl px-10 py-3 bg-amber-400 rounded-t-md'>
        <div  className='min-w-[25%]'>Name</div>
        <div  className='min-w-[25%]'>Points</div>
        <div  className='min-w-[25%]'>Year</div>
        <div  className='min-w-[25%]'>Number of solved problems</div>
      </div>
      <div className='w-full flex flex-col justify-between text-xl px-10 py-3'>
      {students && students.map((student, index) => {
        return (
          <div key={index} className={`flex justify-between text-sm py-3 ${(index === 0) ? "font-bold" : ""}`}>
            <p className={`min-w-[25%]`}>{student.username} {(index === 0) ? "(1st)" : ""}</p>
            <p className='min-w-[25%] '>{student.points}</p>
            <p className='min-w-[25%] '>{student.year}</p>
            <p className='min-w-[25%] '>{student.number_of_solved_problems}</p>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default StudentsRankings