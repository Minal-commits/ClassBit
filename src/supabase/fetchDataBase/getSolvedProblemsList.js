import { supabase } from "../supabaseClient";

const getSolvedProblemsList = async (userID) => {
    const { data, error } = await supabase
        .from("ISPROBLEMSOLVED")
        .select("*")
        .eq("user", userID);

    if (error) {
        console.error("Error fetching solved problems:", error.message);
        return [];
    }

    return data || [];
};

export default getSolvedProblemsList;
