import React from 'react'

const QuoteCard = ({quote}) => {
  return (
    <div className='w-full py-6 px-2 bg-green-300 rounded-md flex justify-center items-center font-semibold'>
        <p className='text-lg '>" {quote} "</p>
    </div>
  )
}

export default QuoteCard 