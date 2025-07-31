import { supabase } from "../supabaseClient";

const getProfileDetails = async () => {
    try {
        const {data: getID} = await supabase.auth.getUser();
        const userID = getID?.user?.id;
        console.log(getID?.user.id);
        const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", userID)
        return data?.[0];
    } catch (error) {
        console.log("Error fetching profiles")
    }
};

export default getProfileDetails;
