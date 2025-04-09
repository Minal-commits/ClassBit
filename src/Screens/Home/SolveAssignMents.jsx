import React, { useEffect } from 'react'
import Assignments from '../../assets/Assignments.png'
import CustomButton from '../components/CustomButton'

const SolveAssignMents = ({handlegetStarted}) => {

  return (
    <div className='w-full h-screen flex items-center justify-center flex-col mt-[-10%]'>
      <div>
          <h1 className='text-5xl font-semibold'>Solve assignments at <span className='text-green-600'>Ease</span></h1>
      </div>
      <div className='flex mt-20 justify-between gap-10 items-center flex-row-reverse'>
          <div className='w-[40%]'>
              <img src={Assignments} alt="" className='rounded-lg shadow-2xl'/>
          </div>
          <div className='w-[60%] flex flex-col gap-6'>
              <h1 className='text-3xl font-semibold'>Master Coding Through Practice</h1>
              <h2 className='text-xl pr-10'>Solve assignments effortlessly with ClassBit’s built-in coding platform.  
              Get instant feedback, debug efficiently, and strengthen your problem-solving skills—all in a real-time coding environment.</h2>
              <CustomButton title='Start Coding' onClick={handlegetStarted} color='#399f4b'/>
          </div>
      </div>
    </div>
  )
}

export default SolveAssignMents