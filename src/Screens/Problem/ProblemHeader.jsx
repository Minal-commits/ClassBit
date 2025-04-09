import { IconArrowBack, IconArrowBigLeft, IconChevronLeft, IconCloudBolt, IconPlayerPlay } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const ProblemHeader = ({ id, title, runCode, submitCode, language, setLanguage, languages, isLoading }) => {
  const navigate = useNavigate();
  const handleNavigation = () => (
    navigate(-1)
  )
  return (
    <div className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 shadow-sm rounded-lg">
      <div className="flex items-center gap-2">
      <div className='p-1 bg-gray-100 shadow-sm shadow-gray-400 rounded-md cursor-pointer mr-2' onClick={handleNavigation}>
        <IconChevronLeft />
      </div>
        <h2 className="text-xl font-semibold text-gray-800">{id}.  {title}</h2>
      </div>

      <div className="flex gap-3">
        <button 
          onClick={runCode}
          className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm font-semibold hover:bg-green-600 transition cursor-pointer"
        >
          {isLoading ? <Loader/> : <IconPlayerPlay/>} Run
        </button>

        <button 
          onClick={submitCode}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm font-semibold hover:bg-blue-600 transition cursor-pointer"
        >
          <IconCloudBolt size={18} /> Submit
        </button>
      </div>

      <div>
        <select 
            name="language" 
            id="lang"
            className="border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            >
            {languages.map((lang, index)=>(
                <option key={index} value={lang.value}>{lang.option}</option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ProblemHeader;
