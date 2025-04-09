import { supabase } from "../supabaseClient";

export const getRankings = async () => {
  const { data, error } = await supabase
    .from('rankings')
    .select('*')
    .order('points', { ascending: false }); // Optional: sort by points

  if (error) {
    console.error("Error fetching rankings:", error);
    return null;
  }

  return data;
};
