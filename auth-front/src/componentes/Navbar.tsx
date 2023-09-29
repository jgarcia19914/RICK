import { Link } from "react-router-dom";
import React from "react";


interface DefaultLayoutProps {
  children: React.ReactNode;
}
export default function Navbar({children}: DefaultLayoutProps) {
  return (
    <>
      <header>
        
        <nav>
     
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Singup">Signup</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}