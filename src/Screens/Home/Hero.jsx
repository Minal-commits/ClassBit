import codeImage from '../../assets/code.png'
import CustomButton from '../components/CustomButton'
// import { useNavigate } from 'react-router-dom'

const Hero = ({handlegetStarted, handleGithub}) => {
  // const navigate = useNavigate();
  // const { user } = useUser();
  // const  signIn  = useSignIn();
  return (
    <div className='h-screen flex items-center justify-center flex-col gap-6 mt-10'>
      <div className='flex flex-col items-center justify-center gap-2 mt-18'>
        <h1 className='text-5xl font-bold align-middle text-center'>
          <span className='text-red-600'>Empowering Students</span> Through Code.
        </h1>
        <h1 className='text-4xl font-bold text-center'>
          Write Run & <span className='text-green-600'>Debug</span>
        </h1>
      </div>
      <div className='flex gap-4 mt-2'>
        <CustomButton title='Get Started' color='#399f4b' onClick={handlegetStarted} />
        <CustomButton title='github' color='#333' onClick={handleGithub} />
      </div>
      <div className='mt-[4%]'>
        <img src={codeImage} alt="" className='h-[45vh] rounded-lg shadow-xl' />
      </div>
    </div>
  );
};

export default Hero;
