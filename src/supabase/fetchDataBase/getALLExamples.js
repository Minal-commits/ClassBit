import { supabase } from "../supabaseClient";

export const getALLExamples = async (problemID) => {
  try {
    const { data, error } = await supabase
      .from("PROBLEMEXAMPLES")
      .select("*")
      .eq('problemID', problemID)

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error fetching testcases:", err.message);
    return [];
  }
};