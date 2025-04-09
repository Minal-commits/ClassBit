import { supabase } from "../supabaseClient";

export const getAllTestcases = async (problemID) => {
  try {
    const { data, error } = await supabase
      .from("PROBLEMTESTCASES")
      .select('*')
      .eq("problemID", problemID)

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error fetching testcases:", err.message);
    return [];
  }
};
