import { supabase } from "../supabaseClient";

export const getAllTopics = async () => {
  try {
    const { data, error } = await supabase
      .from("PROBLEMTOPICS")
      .select("*");

    if (error) throw error;

    return data;
  } catch (err) {
    console.error("Error fetching topics:", err.message);
    return [];
  }
};
