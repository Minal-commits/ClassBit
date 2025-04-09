import React from 'react'
import detailsImage from '../../assets/Details.png'
import CustomButton from '../components/CustomButton'
const Details = ({handlegetStarted}) => {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col mt-[-10%]'>
        <div>
            <h1 className='text-5xl font-semibold'><span className='text-red-600'>Code</span> Debug and Learn in One Place</h1>
        </div>
        <div className='flex mt-20 justify-start gap-10 items-center'>
            <div className='w-[40%] shadow-xl rounded-md'>
                <img src={detailsImage} alt="" className='rounded-lg'/>
            </div>
            <div className='w-[60%] flex flex-col gap-6 pl-10'>
                <h1 className='text-3xl font-semibold'>Solve problems with our Built-in Execution platform</h1>
                <h2 className='text-xl'>Empower students to analyze, interpret, and visualize data seamlessly within the ClassBit platform. Our integrated data analytics and coding environment provides real-time feedback, streamlines workflow, and fosters hands-on learning—mirroring real-world data science practices.</h2>
                <CustomButton title='Start Coding' onClick={handlegetStarted} color='#399f4b'/>
            </div>
        </div>
    </div>
  )
}

export default Details