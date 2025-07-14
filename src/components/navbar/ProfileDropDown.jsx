import { Button, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import profileImg from "../../assets/user.png";
import { Link } from "react-router-dom";
// import Cookies from 'js-cookie'
import Cookies from 'universal-cookie'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"

const ProfileDropDown = () => {
  const cookies = new Cookies()
  const { setIsLoggedIn } = useAuth();
const navigate = useNavigate()
  const logout = async ()=>{
    cookies.remove('token')
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            alt=""
            src={profileImg}
            className="size-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <MenuItem>
          <Button
            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
            onClick={logout}
          >
            Sign out
          </Button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ProfileDropDown;
