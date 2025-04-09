import React from 'react';

const ProblemsHeader = ({ topics, options, sortOption, setSortOption, selectedTopic, setSelectedTopic }) => {
  return (
    <div className="mt-[13vh]">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Available Problems</h1>
        <div className="flex items-center gap-2">
          <h2 className="text-lg text-gray-700">Sort by:</h2>
          <select
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default" disabled>Choose an option</option>
            {options.map((option, index) => (
              <option value={option.value} key={index}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Topics List */}
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => setSelectedTopic(topic)} // Update selected topic
            className={`px-3 py-1 rounded-lg shadow-sm cursor-pointer transition ${
              selectedTopic === topic ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemsHeader;
