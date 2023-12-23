import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomeIcon from "../../Icons/house-chimney.png";
import OrdersIcon from "../../Icons/ballot.png";
import CartIcon from "../../Icons/shopping-cart.png";
import SignOutIcon from "../../Icons/exit.png";
import SignInIcon from "../../Icons/enter.png";
import styles from "./Navbar.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signOutThunk,
  userSelector,
  userActions,
} from "../../store/reducers/userReducer";
import { useEffect, useRef, useState } from "react";
import { NavMenuIcon, SidebarCloseIcon } from "../../Assets/svg/Icons";
import {
  NavbarCartIcon,
  NavbarHomeIcon,
  NavbarLogInIcon,
  NavbarLogOutIcon,
  NavbarOrdersIcon,
} from "../../Icons/Icons";

function Navbar() {
  const sidebarRef = useRef(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSidebarBg, setShowSidebarBg] = useState(false);
  const navigate = useNavigate();
  const { user, signOutSuccess } = useSelector(userSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (signOutSuccess) {
      navigate("/buybusy");
      dispatch(userActions.setSignOutSuccess(false));
    }
  }, [signOutSuccess, dispatch, navigate]);

  const handleSignOut = () => {
    dispatch(signOutThunk())
      .then(() => {
        localStorage.removeItem("uid");
        dispatch(userActions.setUser(null));
        toast.success("Logged out successfully!");
      })
      .catch((error) => toast.error(error.code));
  };

  const handleMenuButton = () => {
    setShowSidebar(!showSidebar);
    setShowSidebarBg(!showSidebarBg);
    document.body.style.overflow = "hidden";
  };

  const handleMenuClose = () => {
    setShowSidebar(!showSidebar);
    setShowSidebarBg(!showSidebarBg);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className={styles.Navbar}>
        {/* nav logo */}
        <NavLink
          className="font-mono font-extrabold text-2xl"
          style={({ isActive }) => {
            return {
              color: isActive ? "#7064e5" : "black",
            };
          }}
          to="/buybusy"
        >
          Buy Busy
        </NavLink>

        {/* nav options */}
        <ul className="max-lg:hidden list-none flex gap-[35px]">
          <li className={styles.navOption}>
            <NavLink
              end
              to="/buybusy"
              className={styles.navLink}
              style={({ isActive }) => {
                return {
                  color: isActive ? "#7064e5" : "black",
                };
              }}
            >
              <NavbarHomeIcon />
              Home
            </NavLink>
          </li>
          {user ? (
            <>
              <li className={styles.navOption}>
                <NavLink
                  to="/buybusy/myorders"
                  className={styles.navLink}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#7064e5" : "black",
                    };
                  }}
                >
                  <NavbarOrdersIcon />
                  My Orders
                </NavLink>
              </li>
              <li className={styles.navOption}>
                <NavLink
                  to="/buybusy/cart"
                  className={styles.navLink}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#7064e5" : "black",
                    };
                  }}
                >
                  <NavbarCartIcon />
                  Cart
                </NavLink>
              </li>
              <li className={styles.navOption} onClick={handleSignOut}>
                <button className={styles.navLink} style={{ color: "black" }}>
                  <NavbarLogOutIcon />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className={styles.navOption}>
              <NavLink
                end
                to="/buybusy/signin"
                className={styles.navLink}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#7064e5" : "black",
                  };
                }}
              >
                <NavbarLogInIcon />
                Sign In
              </NavLink>
            </li>
          )}
        </ul>

        {/* nav menu icon */}
        <button
          onClick={handleMenuButton}
          className="lg:hidden hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <NavMenuIcon />
        </button>

        {/* sidebar bg*/}
        {showSidebarBg && (
          <div className="z-10 inset-0 fixed bg-slate-950 bg-opacity-50"></div>
        )}

        {/* sidebar */}
        <div
          className={`fixed z-20 min-[425px]:max-w-[270px] w-full right-0 top-0 bottom-0 px-7 pt-[20px] shadow-2xl border-l-2 bg-white transition-all duration-200 ease-in-out ${
            showSidebar ? "translate-x-0" : "translate-x-[100vw]"
          }`}
        >
          <div ref={sidebarRef} className="mb-7 flex items-center justify-end">
            <span
              onClick={handleMenuClose}
              className="cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
            >
              <SidebarCloseIcon />
            </span>
          </div>
          <ul className="list-none flex flex-col items-start justify-start gap-[22px]">
            <li className={styles.navOption}>
              <NavLink
                onClick={handleMenuClose}
                end
                to="/buybusy"
                className={styles.navLink}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#7064e5" : "black",
                  };
                }}
              >
                <NavbarHomeIcon />
                Home
              </NavLink>
            </li>
            {user ? (
              <>
                <li className={styles.navOption}>
                  <NavLink
                    end
                    onClick={handleMenuClose}
                    to="/buybusy/myorders"
                    className={styles.navLink}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#7064e5" : "black",
                      };
                    }}
                  >
                    <NavbarOrdersIcon />
                    My Orders
                  </NavLink>
                </li>
                <li className={styles.navOption}>
                  <NavLink
                    end
                    onClick={handleMenuClose}
                    to="/buybusy/cart"
                    className={styles.navLink}
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "#7064e5" : "black",
                      };
                    }}
                  >
                    <NavbarCartIcon />
                    Cart
                  </NavLink>
                </li>
                <li className={styles.navOption} onClick={handleSignOut}>
                  <button
                    onClick={handleMenuClose}
                    className={styles.navLink}
                    style={{ color: "black" }}
                  >
                    <NavbarLogOutIcon />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className={styles.navOption}>
                <NavLink
                  onClick={handleMenuClose}
                  end
                  to="/buybusy/signin"
                  className={styles.navLink}
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#7064e5" : "black",
                    };
                  }}
                >
                  <NavbarLogInIcon />
                  Sign In
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* end of sidebar div */}
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
