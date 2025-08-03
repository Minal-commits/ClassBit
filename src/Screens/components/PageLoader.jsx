import Lottie from 'lottie-react'
import React from 'react'
import CatLoader from '../../assets/CatLoader.json'
import NewLoader from '../../assets/NewLoader.json'
const PageLoader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Lottie animationData={NewLoader} loop={true}/>
    </div>
  )
}

export default PageLoader