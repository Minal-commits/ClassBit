import { supabase } from "../supabaseClient";

export const updateRanking = async (userID, point) => {
  // Ensure point is treated as an integer
  const pointToAdd = parseInt(point, 10) || 0;

  // Step 1: Fetch current values
  const { data: existingData, error: fetchError } = await supabase
    .from("rankings")
    .select("number_of_solved_problems, points")
    .eq("id", userID)
    .single();

  if (fetchError) {
    console.error("Error fetching current ranking:", fetchError);
    return null;
  }

  const currentSolved = parseInt(existingData.number_of_solved_problems, 10) || 0;
  const currentPoints = parseInt(existingData.points, 10) || 0;

  // Step 2: Increment values and update
  const { data, error: updateError } = await supabase
    .from("rankings")
    .update({
      number_of_solved_problems: currentSolved + 1,
      points: currentPoints + pointToAdd,
    })
    .eq("id", userID)
    .select();

  if (updateError) {
    console.error("Error updating ranking:", updateError);
    return null;
  }

  return data;
};
