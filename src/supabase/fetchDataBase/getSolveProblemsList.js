import { supabase } from "../supabaseClient";

const getSolvedProblemsList = async () => {
    try {
        const {data: getID} = await supabase.auth.getUser();
        const userID = getID?.user?.id;
        const { data:ProblemIDS, error } = await supabase
            .from("ISPROBLEMSOLVED")
            .select("*")
            .eq("user", userID)

        // console.log("pr", ProblemIDS);
         const problemIdList = ProblemIDS.map(p => p.problem);
        //  console.log("onlyiDS", problemIdList);
        const {data: problems} = await supabase
            .from("PROBLEMS")
            .select('*')
            .in('id', problemIdList)
        // console.log("All problems", problems)
        return problems;
    } catch (error) {
        console.log("Error fetching problems list")
    }
};

export default getSolvedProblemsList;
