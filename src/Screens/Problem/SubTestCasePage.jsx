import { IconTerminal } from '@tabler/icons-react';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

const SubTestCasePage = ({ testcase, output, index, isLoading }) => {
  const [color, setColor] = useState('bg-gray-200');

  const updateColor = (testcase, output, index) => {
    const expected = String(testcase?.outputs ?? '');
    const actual = String(output?.[index] ?? '');

    if (!output || output[index] === undefined || output[index] === null) {
      setColor('bg-gray-200');
    } else if (expected === actual) {
      setColor('bg-green-200');
    } else {
      setColor('bg-red-200');
    }
  };

  useEffect(() => {
    updateColor(testcase, output, index);
  }, [output, index, testcase?.outputs]);

  return (
    <div className={`w-full h-full flex flex-col min-h-[17vh] rounded-md p-4 ${color}`}>
      <div className="flex justify-between">
        <p className="text-xl font-semibold">Test case: {testcase?.inputs}</p>
        {isLoading ? <Loader /> : <IconTerminal />}
      </div>
      <p className="text-lg mt-2">Expected output: {String(testcase?.outputs)}</p>
      <p className="text-lg">
        {output == null || output[index] === undefined
          ? 'Not executed yet'
          : `Your Output: ${String(output[index])}`}
      </p>
    </div>
  );
};

export default SubTestCasePage;
