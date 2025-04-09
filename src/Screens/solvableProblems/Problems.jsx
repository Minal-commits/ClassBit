import React, { useEffect, useState } from 'react'
import ProblemsHeader from './ProblemsHeader'
import ProblemsList from './ProblemsList'
import { getAllTopics } from '../../supabase/fetchDataBase/getAllTopics';
import { getAllProblems } from '../../supabase/fetchDataBase/getAllProblems';
import PageLoader from "../components/PageLoader";
import getSolvedProblemsList from '../../supabase/fetchDataBase/getSolvedProblemsList';
import { fetchUser } from '../../supabase/Auth/fetchUser';

const Problems = () => {
  const [topics, setTopics] = useState([]);
  const [problems, setProblems] = useState([]);
  const [problemsArray, setProblemsArray] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [sortOption, setSortOption] = useState("default");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [solvedProblems, setSolvedProblems] = useState([]);
  const options = [
    { value: "difficulty", label: "Difficulty" },
    { value: "unsolved", label: "Unsolved" }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      const allTopics = await getAllTopics();
      const formattedTopics = allTopics.map(topic => topic.Name);
      setTopics(formattedTopics);
      const user = await fetchUser();
      console.log(user)
      const allProblems = await getAllProblems();
      const fetchedSolvedProblems = await getSolvedProblemsList(user?.id);
      console.log('solved Problems: ', fetchedSolvedProblems);
      setSolvedProblems(fetchedSolvedProblems);
      setProblems(allProblems);
      setPageLoading(false);
    };

    fetchData();
  }, []);

  const sortByDifficulty = (problems) => {
    return [...problems].sort((a, b) => {
      const difficultyOrder = { "Easy": 1, "Medium": 2, "Hard": 3 };
      return difficultyOrder[a.Difficulty] - difficultyOrder[b.Difficulty];
    });
  };

  const sortByUnsolved = (problems, solvedProblems) => {
    const solvedSet = new Set(solvedProblems.map(p => p.problem)); // assuming p.problem is the problem ID
    return problems.filter(problem => !solvedSet.has(problem.id));
  };
  

  const filterByTopic = (selectedTopic, problems) => {
    return selectedTopic && selectedTopic !== "All"
      ? problems.filter(problem => problem.ProblemTopic === selectedTopic)
      : problems;
  };

  useEffect(() => {
    let updatedProblems = [...problems];

    updatedProblems = filterByTopic(selectedTopic, updatedProblems);

    if (sortOption === "difficulty") {
      updatedProblems = sortByDifficulty(updatedProblems);
    } else if (sortOption === "unsolved") {
      updatedProblems = sortByUnsolved(updatedProblems, solvedProblems);
    }

    setProblemsArray(updatedProblems);
  }, [sortOption, selectedTopic, problems, solvedProblems]);

  if(pageLoading) {
    return( 
      <PageLoader/>
  )}

  return (
    <div className='w-full min-h-[90vh] flex flex-col'>
      <ProblemsHeader
        options={options}
        topics={topics}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
      />
      <ProblemsList problems={problemsArray} solvedProblems={solvedProblems}/>
    </div>
  );
};

export default Problems;
