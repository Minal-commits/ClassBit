import React from 'react'
import CustomButton from '../components/CustomButton'

const TeacherHeader = ({teacherName, handleClick}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6 pt-5'>
        <p className='text-4xl mt-2 font-semibold'>Welcome, <span className='text-red-500'>{teacherName}!</span> See how your students are doing. 👋</p>
        <CustomButton onClick={handleClick} title='Create a challange' className= 'px-4'/>
    </div>
  )
}

export default TeacherHeader