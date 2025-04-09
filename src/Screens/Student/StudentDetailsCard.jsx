import React from 'react'

const StudentDetailsCard = ({studentDetails,listOfProblems}) => {
  return (
    <div className='w-full min-h-[50%] bg-amber-200 rounded-md px-10 py-8 text-xl font-semibold'>
        <div>
            <p>Name: {studentDetails.name}</p>
            <p>Year: {studentDetails.year}</p>
        </div>
        <div>
            <p>Easy: {listOfProblems.easy}</p>
        </div>
        <div>
            <p>Medium: {listOfProblems.medium}</p>
        </div>
        <div>
            <p>Hard: {listOfProblems.hard}</p>
        </div>
    </div>
  )
}

export default StudentDetailsCard