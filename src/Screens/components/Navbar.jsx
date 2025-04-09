import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.png";
import CustomButton from "./CustomButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { fetchUser } from "../../supabase/Auth/fetchUser";
import { signOut } from "../../supabase/Auth/signOut";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isProblemPage = location.pathname.startsWith("/problem");

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isSigningOut, setSigningOut] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      if (userData) {
        setUser(userData);
        setRole(userData.user_metadata?.role || null);
      }
    };
    getUser();
  }, [navigate]);

  const handleAuthClick = () => {
    navigate("/auth");
  };

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut();
    setSigningOut(false);
    navigate("/auth");
  };

  const getProfilePath = () => {
    if (role === "student") return "/student";
    if (role === "teacher") return "/teacher";
    return "/auth";
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-md py-4 ${
        isProblemPage ? "px-5" : "px-80"
      } flex justify-between items-center z-50 max-h-[8vh]`}
    >
      <Link to="/">
        <img src={Logo} alt="ClassBit Logo" className="h-12 w-auto cursor-pointer" />
      </Link>

      <div className="flex gap-8 items-center">
        <div className="flex gap-6">
          {user && (
            <>
              <Link
                to="/contactdev"
                className="text-lg font-semibold cursor-pointer hover:text-blue-600 transition"
              >
                Contact Dev
              </Link>

              <Link
                to={getProfilePath()}
                className="text-lg font-semibold cursor-pointer hover:text-blue-600 transition"
              >
                Profile
              </Link>

              {role === "teacher" && (
                <Link
                  to="/createaproblem"
                  className="text-lg font-semibold cursor-pointer hover:text-green-600 transition"
                >
                  Create Challenge
                </Link>
              )}
            </>
          )}

          <p className="text-lg font-semibold cursor-pointer hover:text-blue-600 transition">
            Contribute
          </p>
        </div>

        <div className="flex gap-4">
          {user ? (
            <div className="cursor-pointer" onClick={handleSignOut}>
              <CustomButton
                title={isSigningOut ? "Signing out..." : "Sign Out"}
                color={isSigningOut ? "#FF9000" : "#FF90FF"}
              />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={handleAuthClick}>
              <CustomButton title="Sign In / Sign Up" color="#13005A" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
