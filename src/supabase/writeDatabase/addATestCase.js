import { supabase } from "../supabaseClient";

export const addATestCase = async (testcases, problemID) => {
  // Add problemID to each testcase object
  const testcasesWithProblemID = testcases.map(testcase => ({
    ...testcase,
    problemID: problemID
  }));

  const { data, error } = await supabase
    .from('PROBLEMTESTCASES')
    .insert(testcasesWithProblemID)
    .select();

  if (error) {
    console.error("Error inserting data:", error);
    alert("Error inserting data: " + error.message);
    return error;
  }

  return data;
}
