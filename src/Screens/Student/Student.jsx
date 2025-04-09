import React from 'react'
import Studentheader from './StudentHeader'
import StudentDetailsCard from './StudentDetailsCard'
import Footer from '../components/Footer.jsx'
import QuoteCard from './QuoteCard.jsx'
import Solvedproblems from './Solvedproblems.jsx'
const Student = () => {
  const difficulty = {
    easy: 24,
    medium: 24,
    hard: 24
  }
  const studentDetails = {
    name :'Minal ranjit',
    year : '3'
  }
  const solvedProblemsList = [
    {
      problemName: "Two Sum",
      problemLink: "https://leetcode.com/problems/two-sum/",
      problemDifficulty: "Easy",
      problemStatus: "Solved",
    },
    {
      problemName: "Add Two Numbers",
      problemLink: "https://leetcode.com/problems/add-two-numbers/",
      problemDifficulty: "Medium",
      problemStatus: "Solved",
    },
    {
      problemName: "Longest Substring Without Repeating Characters",
      problemLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      problemDifficulty: "Medium",
      problemStatus: "Solved",
    },
    {
      problemName: "Median of Two Sorted Arrays",
      problemLink: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      problemDifficulty: "Hard",
      problemStatus: "Solved",
    },
    {
      problemName: "Valid Parentheses",
      problemLink: "https://leetcode.com/problems/valid-parentheses/",
      problemDifficulty: "Easy",
      problemStatus: "Solved",
    },
    {
      problemName: "Merge Two Sorted Lists",
      problemLink: "https://leetcode.com/problems/merge-two-sorted-lists/",
      problemDifficulty: "Easy",
      problemStatus: "Solved",
    },
    {
      problemName: "Generate Parentheses",
      problemLink: "https://leetcode.com/problems/generate-parentheses/",
      problemDifficulty: "Medium",
      problemStatus: "Solved",
    },
    {
      problemName: "Search in Rotated Sorted Array",
      problemLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      problemDifficulty: "Medium",
      problemStatus: "Solved",
    },
    {
      problemName: "Container With Most Water",
      problemLink: "https://leetcode.com/problems/container-with-most-water/",
      problemDifficulty: "Medium",
      problemStatus: "Solved",
    },
    {
      problemName: "Reverse Nodes in k-Group",
      problemLink: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
      problemDifficulty: "Hard",
      problemStatus: "Solved",
    },
    {
      problemName: "Word Ladder",
      problemLink: "https://leetcode.com/problems/word-ladder/",
      problemDifficulty: "Hard",
      problemStatus: "Solved",
    },
    {
      problemName: "Find Median from Data Stream",
      problemLink: "https://leetcode.com/problems/find-median-from-data-stream/",
      problemDifficulty: "Hard",
      problemStatus: "Solved",
    }
];

  return (
    <div className='w-full pt-[9vh]'>
      <Studentheader studentName="Minal"/>
      <div className='w-full flex gap-10 min-h-[75vh] pt-10'>
        <div className='min-w-[30%] h-full flex flex-col gap-4'>
          <StudentDetailsCard studentDetails={studentDetails} listOfProblems={difficulty}/>
          <QuoteCard quote="Solving problems increases your skill"/>
        </div>
        <div className='min-w-[70%] h-full'>
          <Solvedproblems solvedProblemsList={solvedProblemsList}/>
        </div>
      </div>
    </div>
  )
}

export default Student