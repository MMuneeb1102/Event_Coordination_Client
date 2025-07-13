import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import ProfileDropDown from "./ProfileDropDown";
import MobileDropDown from "./MobileDropDown";
import NavItems from "./NavItems";
import logo from "../../assets/logo.png";
import Cookies from 'js-cookie';
import CustomButton from "../buttons/CustomButton";
import LoginButton from "../buttons/LoginButton";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    const t = Cookies.get('token');
    setToken(t);
  }, []);

  const handleNav = () =>{
    navigate('/signin')
  }

  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "About", href: "#", current: false },
    { name: "Contact us", href: "#", current: false },
    ...(token ? [{ name: "Events", href: "/events", current: false }] : []),
  ];
  return (
    <Disclosure
      as="nav"
      style={{
        backgroundImage: "linear-gradient(90deg, #0f0533 0%, #1b0a5c 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={logo} className="h-8 w-auto" />
            </div>

            <NavItems navigation={navigation} classNames={classNames} />
          </div>
          {token ? <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              style={{ background: 'none' }}
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            <ProfileDropDown />
          </div> :
            <div>
              <LoginButton btnText="Login" onClickFunction={handleNav} />
            </div>
          }
        </div>
      </div>

      <MobileDropDown navigation={navigation} classNames={classNames} />
    </Disclosure>
  );
}
