import { IconX } from '@tabler/icons-react';
import React from 'react';
import ErrorDescription from './ErrorDescription';

const ErrorPage = ({error, closeErrorPage}) => {
  return (
    <div className="w-full h-full shadow-md rounded-t-lg ">
      <div className='w-full px-2 py-2 bg-slate-200 flex justify-between items-center'>
        <p className='text-2xl font-semibold pl-4'>Error Occured !</p>
        <div className='p-2 bg-white rounded cursor-pointer' onClick={closeErrorPage}>
            <IconX/>
        </div>
      </div>
      <ErrorDescription error={error}/>
    </div>
  );
};

export default ErrorPage;
