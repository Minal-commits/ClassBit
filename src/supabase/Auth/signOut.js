import { supabase } from "../supabaseClient";

export const signOut = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("user");
}