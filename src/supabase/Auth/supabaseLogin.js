import { supabase } from "../supabaseClient";

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  } else {
    localStorage.setItem('user', JSON.stringify(data.user));
    return {
      success: true,
      user: data.user,
    };
  }
};
