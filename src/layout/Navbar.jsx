import { useAuth } from "../auth/AuthContext";
import { NavLink } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header>
      <nav>
        {/* Links shown to everyone */}
        <NavLink to="/">Home</NavLink>

        {token ? (
          /* Links shown ONLY when logged in */
          <>
            <NavLink to="/account">Account</NavLink>
            <a onClick={() => logout()}>Log out</a>
          </>
        ) : (
          /* Links shown ONLY when logged out */
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
