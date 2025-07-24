import React, { useEffect, useState } from "react";
import { getAllTopics } from "../../supabase/fetchDataBase/getAllTopics";
import PageLoader from "../components/PageLoader";
import { addAProblem } from "../../supabase/writeDatabase/addAProblem";
import { addATestCase } from "../../supabase/writeDatabase/addATestCase";
import { addAnExample } from "../../supabase/writeDatabase/addAnExample";
import { useNavigate } from "react-router-dom";

const CreateAProblemForm = () => {
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  const [allTopics, setAllTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    difficulty: difficultyLevels[0],
    addedBy: "",
    point: "",
    description: "",
    examples: [{ inputs: "", outputs: "", description: "" }],
    testCases: [{ inputs: "", outputs: "" }],
  });

  useEffect(() => {
    const getTopics = async () => {
      const getTopic = await getAllTopics();
      const formattedData = getTopic.map((item) => ({
        value: item.Name,
        label: item.Name,
      }));
      setAllTopics(formattedData);

      if (formattedData.length > 0 && !formData.topic) {
        setFormData((prev) => ({ ...prev, topic: formattedData[0].value }));
      }

      setLoading(false);
    };
    getTopics();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExampleChange = (index, field, value) => {
    const newExamples = [...formData.examples];
    newExamples[index][field] = value;
    setFormData({ ...formData, examples: newExamples });
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...formData.testCases];
    newTestCases[index][field] = value;
    setFormData({ ...formData, testCases: newTestCases });
  };

  const handleAddExample = () => {
    setFormData({
      ...formData,
      examples: [...formData.examples, { inputs: "", outputs: "", description: "" }],
    });
  };

  const handleAddTestCase = () => {
    setFormData({
      ...formData,
      testCases: [...formData.testCases, { inputs: "", outputs: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.title || !formData.addedBy || !formData.point || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }


    const Problem = await addAProblem(formData);
    if (Problem) {
      const problemID = Problem[0].id;
      await addATestCase(formData.testCases, problemID);
      await addAnExample(formData.examples, problemID);
    }

    // Reset form after submission
    setFormData({
      title: "",
      topic: allTopics[0]?.value || "",
      difficulty: difficultyLevels[0],
      addedBy: "",
      point: "",
      description: "",
      examples: [{ inputs: "", outputs: "", description: "" }],
      testCases: [{ inputs: "", outputs: "" }],
    });
    setLoading(false)
    navigate('/');
  };

  if (loading) return <PageLoader />;

  return (
    <div className="py-10 w-full">
      <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <p className="text-xl font-semibold">Enter the problem title:</p>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter problem title"
            className="outline-none border-b w-[50%] text-lg pt-1"
            required
          />
        </div>

        {/* Meta Info */}
        <div className="flex w-[80%] justify-between pt-4 items-center gap-4 flex-wrap">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Added by:</p>
            <input
              name="addedBy"
              value={formData.addedBy}
              onChange={handleChange}
              placeholder="Enter teacher name"
              className="outline-none border-b text-lg pt-1"
              required
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Point:</p>
            <input
              name="point"
              value={formData.point}
              onChange={handleChange}
              placeholder="Enter point value"
              className="outline-none border-b text-lg pt-1"
              required
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Select topic:</p>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="bg-gray-200 px-3 py-1 rounded"
              disabled={allTopics.length === 0}
            >
              {allTopics.map((topic, index) => (
                <option key={index} value={topic.value}>
                  {topic.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Difficulty:</p>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              {difficultyLevels.map((diff, index) => (
                <option key={index} value={diff}>
                  {diff}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-xl font-semibold">Enter the problem description:</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter problem description"
            className="outline-none border-b w-[60%] text-lg pt-2"
            required
          />
        </div>

        {/* Examples */}
        <div>
          <p className="text-xl font-semibold">Examples:</p>
          {formData.examples.map((example, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-md mb-2">
              <label className="font-medium">Input:</label>
              <textarea
                className="w-full bg-white p-1 border rounded"
                placeholder="Example input..."
                value={example.inputs}
                onChange={(e) => handleExampleChange(index, "inputs", e.target.value)}
              />

              <label className="font-medium mt-2">Output:</label>
              <textarea
                className="w-full bg-white p-1 border rounded"
                placeholder="Example output..."
                value={example.outputs}
                onChange={(e) => handleExampleChange(index, "outputs", e.target.value)}
              />

              <label className="italic text-gray-600 mt-2">Explanation:</label>
              <textarea
                className="w-full bg-white p-1 border rounded"
                placeholder="Explanation..."
                value={example.description}
                onChange={(e) => handleExampleChange(index, "description", e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddExample}
            className="mt-2 text-blue-600 cursor-pointer"
          >
            + Add Example
          </button>
        </div>

        {/* Test Cases */}
        <div>
          <p className="text-xl font-semibold">Test Cases:</p>
          {formData.testCases.map((test, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-md mb-2">
              <label className="font-medium">Input:</label>
              <textarea
                className="w-full bg-white p-1 border rounded"
                placeholder="Test case input..."
                value={test.inputs}
                onChange={(e) => handleTestCaseChange(index, "inputs", e.target.value)}
              />

              <label className="font-medium mt-2">Expected Output:</label>
              <textarea
                className="w-full bg-white p-1 border rounded"
                placeholder="Expected output..."
                value={test.outputs}
                onChange={(e) => handleTestCaseChange(index, "outputs", e.target.value)}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTestCase}
            className="mt-2 text-blue-600 cursor-pointer"
          >
            + Add Test Case
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Add Problem
        </button>
      </form>
    </div>
  );
};

export default CreateAProblemForm;
