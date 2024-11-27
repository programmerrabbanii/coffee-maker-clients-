import { NavLink } from "react-router-dom";
import logoNav from "../assets/images/more/logo1.png";

const Navbar = () => {
  const links = (
    <>
      <li className="ml-2 text-lg hover:text-primary transition duration-300">
        <NavLink to="/" activeClassName="text-primary">Home</NavLink>
      </li>
      <li className="ml-2 text-lg hover:text-primary transition duration-300">
        <NavLink to="/addcoffe" activeClassName="text-primary">Add Coffee</NavLink>
      </li>
      {/* <li className="ml-2 text-lg hover:text-primary transition duration-300">
        <NavLink to="/updatecoffe} activeClassName="text-primary">Update Coffee</NavLink>
      </li> */}
    </>
  );

  return (
    <div className="navbar bg-gradient-to-r from-[#b8926b] to-[#6b4226] text-white sticky top-0 z-10">
      <div className="navbar-start">
        {/* Dropdown for mobile */} 
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#f8f1e8] text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img className="h-12 w-12 rounded-full" src={logoNav} alt="Coffee Logo" />
          <h2 className="text-3xl font-semibold tracking-wide">Coffee Store</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline border-white text-white hover:bg-primary hover:border-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
