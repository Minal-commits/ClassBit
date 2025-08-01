import { supabase } from "../supabaseClient";

export const getRankings = async () => {
  const { data, error } = await supabase
    .from('rankings')
    .select('*')
    .order('number_of_solved_problems', { ascending: false });

  if (error) {
    console.error("Error fetching rankings:", error);
    return null;
  }

  return data;
};
