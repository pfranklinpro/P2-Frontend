import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { PrincipalContext, SetPrincipalContext } from "../context/PrincipalProvider";


function Navbar() {
  const principal = useContext(PrincipalContext);
  const setPrincipal = useContext(SetPrincipalContext);

  function logout() {
    setPrincipal!(null);
    sessionStorage.clear();
  }

  return (
    <nav className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-4 bg-gradient-to-r from-slate-800 to-slate-700 ">
      <div className="container mx-auto flex flex-wrap items-center justify-between pt-1">
        <div className="w-1/5"></div>
        <div className="font-serif w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {/* Title */}
          <p className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-80">
            <Link to={"/"}>
              Sylvester
            </Link>
          </p>
        </div>

        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">

            <li className="nav-item">
              <p className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                <Link to={"/feed"}>
                  Feed
                </Link>
              </p>
            </li>

            {principal ?
              <>
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link to={"/profile"}>
                      Profile
                    </Link>
                  </p>
                </li>

                <li className="nav-item">
                  <button onClick={logout} className="bg-slate-800 flex items-center rounded-md text-white ml-5 px-5 py-2 ease-out duration-300 hover:scale-110">
                    <Link to={"/login"}>
                      Logout
                    </Link>
                  </button>

                </li>

                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-s leading-snug text-white ml-2 opacity-70">
                    {principal.username}
                  </p>
                </li>
              </>

              :
              <>
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link to={"/login"}>
                      Login
                    </Link>
                  </p>
                </li>
                <li className="nav-item">
                  <p className="px-3 py-2 flex items-center text-s uppercase font-bold leading-snug text-white hover:opacity-75">
                    <Link to={"/signup"}>
                      Signup
                    </Link>
                  </p>
                </li>
              </>
            }


          </ul>
        </div>
        <div className="w-1/5"></div>
      </div>
    </nav>
  )
}

export default Navbar;