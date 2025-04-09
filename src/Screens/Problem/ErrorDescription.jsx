import React from 'react';

const ErrorDescription = ({ error }) => {
  return (
    <div className="bg-red-100 p-4 rounded-md shadow-md w-full">
      <h2 className="text-red-600 font-bold mb-2">Error Output:</h2>
      <pre className="bg-red-200 p-2 rounded text-red-900 text-sm overflow-x-auto">
        {error}
      </pre>
    </div>
  );
};

export default ErrorDescription;
