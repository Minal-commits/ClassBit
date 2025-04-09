import { supabase } from "../supabaseClient";

export const addAnExample = async (examples, problemID) => {
  // Add problemID to each testcase object
  const examplesWithProblemID = examples.map(testcase => ({
    ...testcase,
    problemID: problemID
  }));

  const { data, error } = await supabase
    .from('PROBLEMEXAMPLES')
    .insert(examplesWithProblemID)
    .select();

  if (error) {
    console.error("Error inserting data:", error);
    alert("Error inserting data: " + error.message);
    return error;
  }

  return data;
}
