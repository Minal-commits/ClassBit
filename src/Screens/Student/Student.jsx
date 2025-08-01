import { useEffect, useState } from 'react'
import Studentheader from './StudentHeader'
import StudentDetailsCard from './StudentDetailsCard'
import QuoteCard from './QuoteCard.jsx'
import Solvedproblems from './Solvedproblems.jsx'
import getProfileDetails from '../../supabase/fetchDataBase/getProfileDetails.js'
import getSolvedProblemsList from '../../supabase/fetchDataBase/getSolveProblemsList.js'
import PageLoader from '../components/PageLoader.jsx'
import CustomButton from '../components/CustomButton.jsx'
import { useNavigate } from 'react-router-dom'


const Student = () => {
  const [studentDetails, setStudentDetails] = useState({});
  const [solvedProblemsList, setSolvedProblemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [difficultyList, setDifficultyList] = useState({});
  const navigate = useNavigate();
  const getStudent = async () => {
      const user = await getProfileDetails();
      setStudentDetails(user);
  }

  const getProblems = async () =>{
    const problemsList = await getSolvedProblemsList();
    getDifficulties(problemsList);

    setSolvedProblemsList(problemsList);
  }

  const getDifficulties = async (problemsArray) => {
    let easy = 0, medium = 0, hard = 0;
    await problemsArray.forEach((problem) => {
      if (problem.Difficulty === "Easy") {
        easy++;
      } else if (problem.Difficulty === "Medium") {
        medium++;
      } else if (problem.Difficulty === "Hard") {
        hard++;
      }
    });

    setDifficultyList({ easy, medium, hard });
  };

  useEffect(()=>{
    const fetchAllData = async () => {
      setIsLoading(true);
      await getStudent();
      await getProblems();
      setIsLoading(false);
    };
    fetchAllData();
  }, [setStudentDetails, setSolvedProblemsList])

  if(isLoading) return <PageLoader/>

  return (
    <div className='w-full pt-[9vh]'>
      <Studentheader studentName={studentDetails?.full_name}/>
      <div className='w-full flex gap-10 min-h-[75vh] pt-10'>
        <div className='min-w-[30%] h-full flex flex-col gap-4'>
          <StudentDetailsCard studentDetails={studentDetails} listOfProblems={difficultyList}/>
          <QuoteCard quote="Solving problems increases your skill"/>
          <CustomButton title="View Rankings" onClick={() => navigate('/rankings')} />
        </div>
        {solvedProblemsList?.length>0 ? (<div className='min-w-[70%] h-full'>
          <Solvedproblems solvedProblemsList={solvedProblemsList}/>
        </div>) : 
        (
          <div>
            <p>You have'nt solved any problems yet.</p>
          </div>
        )
         }
      </div>
    </div>
  )
}

export default Student