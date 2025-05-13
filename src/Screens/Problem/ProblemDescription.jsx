import React from "react";

const ProblemDescription = ({ problem, examples, testcases, tabSwitchCount }) => {
  return (
    <div className="w-full h-full p-6 overflow-y-auto shadow-md rounded-lg">
      {/* Title & Metadata */}
      <h1 className="text-2xl font-bold text-gray-900">{problem.ProblemName}</h1>
      <p className="text-lg text-gray-700 mt-2">
        <span className="font-semibold">Topic:</span> {problem.ProblemTopic} |{" "}
        <span className="font-semibold">Difficulty:</span>{" "}
        <span
          className={`px-2 py-1 rounded-md text-white ${
            problem.Difficulty === "Easy"
              ? "bg-green-500"
              : problem.Difficulty === "Medium"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {problem.Difficulty}
        </span>
      </p>

      {/* Problem Description */}
      <p className="mt-4 text-gray-700 leading-relaxed">{problem.ProblemDescriptions}</p>

      {/* Examples */}
      <h2 className="text-xl font-semibold mt-6 border-b pb-2">Examples</h2>
      <ul className="mt-4 space-y-3">
        {examples.map((example, index) => (
          <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">
              <span className="font-semibold">Input:</span> {example.inputs}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Output:</span> {example.outputs}
            </p>
            <p className="text-sm text-gray-600 italic">{example.explanation}</p>
          </li>
        ))}
      </ul>

      {/* Test Cases */}
      <h2 className="text-xl font-semibold mt-6 border-b pb-2">Test Cases</h2>
      <ul className="mt-4 space-y-3">
        {testcases.map((testCase, index) => (
          <li key={index} className="bg-gray-200 p-4 rounded-lg shadow-sm">
            <p className="text-gray-800">
              <span className="font-semibold">Input:</span> {testCase.inputs}
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Expected Output:</span>{" "}
              {testCase.outputs}
            </p>
          </li>
        ))}
      </ul>

      {tabSwitchCount>0 ? <h2 className="text-2xl font-semibold mt-8 text-red-600">You have moved the tab {tabSwitchCount} times</h2> : null }
    </div>
  );
};

export default ProblemDescription;
