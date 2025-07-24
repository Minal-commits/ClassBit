import { GoogleGenAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export async function executeCodeViaGemeini(code, language, testCases) {
  try {
    const prompt = `You are a code execution engine, similar to Judge0 CE.
    Your task is to:
    - Execute the following code: ${code}
    - Use the specified programming language: ${language}
    - Run it against the provided test cases: ${testCases}
    
    Instructions:
    1. For each test case, return only the raw output produced by the code.
    2. If the code produces an error for any test case, return the exact error message as a compiler or interpreter would, prefixed with "Error: ".
    3. Do not include any explanations, formatting, or extra information.
    4. The array should contain either the raw output string or the error string (with the "Error: " prefix) for each test case.
    5. If there is an error just return one error message.
    6. Run all the testcases in parallel and return the results in the same order as the test cases& return them in the array format like this: [output1, output2, output3].
    7. Return the inputs and outputs in the same order as the test cases.
    `;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error executing code via Gemini:", error);
    return "Error: Unable to execute code at the moment.";
  }
}
