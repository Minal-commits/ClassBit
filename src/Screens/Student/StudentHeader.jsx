import React from 'react'
import CustomButton from '../components/CustomButton'

const Studentheader = ({studentName}) => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-6 pt-5'>
        <p className='text-4xl mt-2 font-semibold'>Welcome, <span className='text-red-500'>{studentName}!</span> See how your students are doing. 👋</p>
    </div>
  )
}

export default Studentheader