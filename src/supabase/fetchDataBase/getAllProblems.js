import { supabase } from "../supabaseClient";

export const getAllProblems = async () => {
  try {
    const { data, error } = await supabase
      .from("PROBLEMS")
      .select("*");

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error fetching topics:", err.message);
    return [];
  }
};
