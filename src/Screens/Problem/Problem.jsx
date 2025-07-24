import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProblemDescription from "./ProblemDescription";
import CodePlatform from "./CodePlatform";
import TestCases from "./TestCases";
import ProblemHeader from "./ProblemHeader";
import ErrorPage from "./ErrorPage";
import { getAproblem } from "../../supabase/fetchDataBase/getAProblem";
import PageLoader from "../components/PageLoader";
import { motion } from "framer-motion";
import { submitAProblem } from "../../supabase/writeDatabase/submitAProblem";
import { fetchUser } from "../../supabase/Auth/fetchUser";
import { updateRanking } from "../../supabase/updateDataBase/updateRanking";
import { executeCodeViaGemeini } from "../../ApiCalls/executeViaGemini";

const Problem = () => {
  const { problemid } = useParams();

  const languages = [
    { value: "cpp", option: "C++" },
    { value: "c", option: "C" },
    { value: "java", option: "Java" },
    { value: "python", option: "Python" },
    { value: "javascript", option: "Javascript" },
  ];

  const broilerPlateCodes = [
    { language: "cpp", code: `#include <iostream>\nusing namespace std;\nint main() {\n cout << "Hello, World!" << endl;\n return 0;\n}` },
    { language: "c", code: `#include <stdio.h>\nint main() {\n printf("Hello, World!\\n");\n return 0;\n}` },
    { language: "java", code: `public class Main {\n public static void main(String[] args) {\n System.out.println("Hello, World!");\n }\n}` },
    { language: "python", code: `print("Hello, World!")` },
    { language: "javascript", code: `console.log("Hello, World!");` },
  ];

  const [language, setLanguage] = useState("cpp");
  const [broilerPlateCode, setBroilerPlateCode] = useState("");
  const [outputs, setOutputs] = useState([]);
  const [problem, setProblem] = useState(null);
  const [testCases, setTestCases] = useState([]);
  const [examples, setExamples] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iseErrorPageOpen, setIsErrorPageOpen] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isSolved, setIsSolved] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const extractTestCases = (testCases) => {
    const extractedTestCasesArray = [];
    testCases.forEach((testCase) => {
      if (testCase.inputs && testCase.outputs) {
        extractedTestCasesArray.push({
          "inputs": testCase.inputs,
        });
      }
    });
    return JSON.stringify(extractedTestCasesArray);
  }

  const extractPureOutputArray = async (outputs) => {
    const cleaned = outputs
      .replace(/```json|```/g, '') // remove code block tags
      .replace(/\\n/g, '')         // remove literal \n inside strings
      .trim();
    return JSON.parse(cleaned);
  };

  const getBroilerPlateCode = (lang) => {
    const result = broilerPlateCodes.find((item) => item.language === lang);
    return result ? result.code : "";
  };


  const executeCodeFunction = async (language, testCases, code) => {
    setIsLoading(true);
    setIsErrorPageOpen(false);
    setOutputs([]);
    const extractedTestCases = extractTestCases(testCases);
    const res = await executeCodeViaGemeini(code, language, extractedTestCases);
    const outputArray = await extractPureOutputArray(res);
    if (outputArray[0]?.startsWith("Error:")) {
      setIsLoading(false);
      setError(outputArray[0]);
      setOutputs([]);
      setIsErrorPageOpen(true);
      return;
    }
    setOutputs(outputArray);
    setIsLoading(false);
  };

  const closeErrorPage = () => setIsErrorPageOpen(false);

  const runCode = async () => {
    if (!problem) {
      alert("Problem not loaded.");
      return;
    }
    setIsSolved(false);
    await executeCodeFunction(language, testCases, broilerPlateCode);
  };

  const submitCode = async () => {
    setIsPageLoading(true);
    if (isSolved) {
      const user = await fetchUser();
      const res = await submitAProblem(user?.id, problemid, broilerPlateCode, isSolved);
      const updateRank = await updateRanking(user?.id, problem?.Point);
    } else {
      alert("❌ Some test cases failed. Please try again.");
    }
    setIsPageLoading(false);
  };

  useEffect(() => {
    if (outputs.length === 0 || testCases.length === 0) return;

    let allMatched = true;
    testCases.forEach((testCase, index) => {
      if (String(testCase.outputs).trim() !== String(outputs[index]).trim()) {
        allMatched = false;
      }
    });

    if (allMatched) {
      console.log("🎉 All outputs matched!");
      setIsSolved(true);
    } else {
      console.log("❌ Some test cases failed.");
      setIsSolved(false);
    }
  }, [outputs]);

  useEffect(() => {
    const fetchProblemData = async () => {
      setIsPageLoading(true);
      try {
        const { problem, testcases, examples } = await getAproblem(problemid);
        setProblem(problem);
        setTestCases(testcases);
        setExamples(examples);
      } catch (err) {
        console.error("Error fetching problem:", err);
        setError("Failed to load problem data");
        setIsErrorPageOpen(true);
      } finally {
        setIsPageLoading(false);
      }
    };
    fetchProblemData();
  }, [problemid]);

  useEffect(() => {
    setBroilerPlateCode(getBroilerPlateCode(language));
  }, [language]);

  if (isPageLoading) {
    return <PageLoader />;
  }

  if (!problem) {
    return (
      <div className="w-full h-[90vh] flex items-center justify-center text-red-500">
        Problem not found!
      </div>
    );
  }

  return (
    <div className="w-full min-h-[92vh] mt-[8vh]">
      <div className="flex w-full h-[6vh]">
        <ProblemHeader
          id={problem.id}
          title={problem.ProblemName}
          languages={languages}
          language={language}
          setLanguage={handleLanguageChange}
          runCode={runCode}
          submitCode={submitCode}
          isLoading={isLoading}
        />
      </div>
      <div className="w-full h-[86vh] flex justify-between">
        <div className="w-[45%] h-full">
          {error && iseErrorPageOpen ? (
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <ErrorPage error={error} closeErrorPage={closeErrorPage} />
            </motion.div>
          ) : (
            <ProblemDescription
              problem={problem}
              examples={examples}
              testcases={testCases}
            />
          )}
        </div>
        <div className="w-[55%] h-full">
          <div className="w-full h-[65%]">
            <CodePlatform
              lang={language}
              broilerPlateCode={broilerPlateCode}
              setBroilerPlateCode={setBroilerPlateCode}
            />
          </div>
          <div className="w-full h-[35%]">
            <TestCases
              testcases={testCases}
              outputs={outputs}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;