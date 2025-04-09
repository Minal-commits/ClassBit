import { IconChecks, IconExclamationCircle } from '@tabler/icons-react';
import React, { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const ProblemsList = ({ problems, solvedProblems }) => {
  const navigate = useNavigate();

  // Use useMemo to avoid recalculating unless props change
  const problemsWithSolvedStatus = useMemo(() => {
    const solvedSet = new Set(solvedProblems.map((p) => p.problem)); // faster lookup
    return problems.map((problem) => ({
      ...problem,
      isSolved: solvedSet.has(problem.id),
    }));
  }, [problems, solvedProblems]);

  const handleNavigation = (id) => {
    navigate(`/problem/${id}`);
    console.log("clicked", id);
  };

  return (
    <div className='min-h-[50vh] mt-[4vh] mb-[6vh] w-full'>
      {/* Header Row */}
      <div className='flex bg-gray-100 text-gray-800 font-semibold px-3 py-4 rounded shadow-sm mb-3'>
        <div className='w-[5%] px-4'>#</div>
        <div className='w-[25%] pl-2'>Problem Name</div>
        <div className='w-[15%] text-center'>Difficulty</div>
        <div className='w-[15%] pl-20'>Topic</div>
        <div className='w-[15%] pl-20'>Points</div>
        <div className='w-[25%] pl-20'>Added By</div>
      </div>

      {/* Problem List */}
      <div className='flex flex-col gap-3'>
        {problemsWithSolvedStatus.map((problem, index) => (
          <div
            key={problem.id}
            className={`${
              problem.isSolved ? 'bg-green-200' : 'bg-red-200'
            } w-full py-4 flex justify-between px-3 rounded cursor-pointer transition hover:shadow-lg`}
            onClick={() => handleNavigation(problem.id)}
          >
            <div className='w-[5%] px-4'>{index + 1}.</div>
            <div className='flex gap-2 w-[25%] items-center pl-2'>
              {problem.isSolved ? <IconChecks /> : <IconExclamationCircle />}
              {problem.ProblemName}
            </div>
            <div className='w-[15%] flex justify-center'>
              {problem.Difficulty}
            </div>
            <div className='w-[15%] flex justify-start pl-20'>
              <p>{problem.ProblemTopic}</p>
            </div>
            <div className='w-[15%] flex justify-start pl-20'>
              <p>{problem.Point}</p>
            </div>
            <div className='w-[25%] flex justify-start pl-20'>
              <p>{problem.AddedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsList;
