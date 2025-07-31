
const StudentDetailsCard = ({studentDetails,listOfProblems}) => {
  return (
    <div className='w-full min-h-[50%] bg-amber-200 rounded-md px-10 py-8 text-xl font-semibold'>
        <div>
            <p>Name: {studentDetails?.full_name}</p>
            <p>Year: {studentDetails?.year}</p>
        </div>
        {listOfProblems?.easy>0 ? (
            <p>Easy: {listOfProblems?.easy}</p>
        ):null}
        {listOfProblems?.medium>0 ? (
                <p>Medium: {listOfProblems.medium}</p>
        ):null}
        {listOfProblems?.hard>0 ? (
            <p>Hard: {listOfProblems?.hard}</p>
        ):null}
    </div>
  )
}

export default StudentDetailsCard