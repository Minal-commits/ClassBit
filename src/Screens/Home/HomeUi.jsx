import React from 'react'
import Hero from './Hero'
import Details from './Details'
import SolveAssignMents from './SolveAssignMents'
import Testimonials from './Testimonials'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HomeUi = () => {
  const navigate = useNavigate();
  const handlegetStarted = () =>{
    navigate('/solvableproblems');
  }
  return (
    <div className='w-full h-full justify-center items-center px-80'>
        <Navbar/>
        <Hero handlegetStarted={handlegetStarted}/>
        <Details handlegetStarted={handlegetStarted}/>
        <SolveAssignMents handlegetStarted={handlegetStarted}/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default HomeUi