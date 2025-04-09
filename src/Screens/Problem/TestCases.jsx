import React, { useEffect } from "react";
import SubTestCasePage from "./SubTestCasePage";

const TestCases = ({ testcases, outputs, isLoading }) => {

  return (
    <div className="w-full h-full p-4 overflow-y-auto bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center border-b pb-2">
        <h2 className="text-xl font-semibold text-gray-900">Test Cases</h2>
      </div>
      <div className="w-full min-h-[20vh] flex justify-center items-center gap-2">
        {testcases.map((testcase, index)=>(
          <SubTestCasePage testcase={testcase} output={outputs} key={index} index={index} isLoading={isLoading}/>
        ))}
      </div>
    </div>
  );
};

export default TestCases;


{/* <ul className="mt-4 space-y-3">
        {testcases.map((testCase, index) => (
          <li
          key={index}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-300"
          >
            <SubTestCasePage/>
            <p className="text-gray-800">
              <span className="font-semibold">Input:</span> {testCase.input}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Expected Output:</span> {testCase.expectedOutput}
            </p>
            <p className={`mt-2 font-semibold ${outputs && outputs[index] === testCase.expectedOutput ? "text-green-600" : "text-red-600"}`}>
              <span className="font-semibold">Your Output:</span> 
              {outputs && outputs.length > index ? outputs[index] : "Not executed yet"}
            </p>
          </li>
        ))}
      </ul> */}