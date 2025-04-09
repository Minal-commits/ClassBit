import { supabase } from "../supabaseClient";

export const addAProblem = async (formData) => {
    const { data, error } = await supabase
  .from('PROBLEMS')
  .insert({
    ProblemTopic: formData.topic,
    ProblemName: formData.title,
    ProblemDescriptions: formData.description,
    AddedBy: formData.addedBy,
    Difficulty: formData.difficulty,
    Point: formData.point,
  })
  .select()
  
  if(error) {
    console.error("Error inserting data:", error);
    alert("Error inserting data:", error.message);
    return error;
  }
  return data;

}