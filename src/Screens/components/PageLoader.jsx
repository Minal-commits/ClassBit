import Lottie from 'lottie-react'
import React from 'react'
import CatLoader from '../../assets/CatLoader.json'
const PageLoader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Lottie animationData={CatLoader} loop={true}/>
    </div>
  )
}

export default PageLoader