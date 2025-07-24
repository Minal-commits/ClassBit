import { supabase } from "../supabaseClient";

export const signUP = async ({ email, password, name, rollNo, year }) => {
    const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              name: name,
              rollNo: rollNo,
              year: year,
              role: "student"
            }
          }
        }
      )

  if (error) {
    console.error("Sign-up error:", error.message);
    return { success: false, error: error.message };
  } else {
    return { success: true, user: data.user };
  }
};
