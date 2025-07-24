import { supabase } from "../supabaseClient";

export const submitAProblem = async (user, problem, code, isSolved) => {
  // First, check if the user has already submitted this problem
  const { data: existing, error: fetchError } = await supabase
    .from('ISPROBLEMSOLVED')
    .select("*")
    .eq("user", user)
    .eq("problem", problem)
    .single(); // Only one record should exist per user-problem pair

  if (fetchError && fetchError.code !== "PGRST116") {
    // PGRST116 = no rows found (which is okay in this case)
    console.error("Error checking existing submission:", fetchError);
    alert("Error checking existing submission: " + fetchError.message);
    return fetchError;
  }

  if (existing) {
    // Problem already submitted — optionally update or skip
    alert("You've already submitted this problem.");
    return existing;
  }

  // Insert new submission
  const { data, error } = await supabase
    .from('ISPROBLEMSOLVED')
    .insert({
      user,
      problem,
      code,
      isSolved,
    })
    .select();

  if (error) {
    console.error("Error inserting data:", error);
    alert("Error inserting data: " + error.message);
    return error;
  }

  return data;
};
