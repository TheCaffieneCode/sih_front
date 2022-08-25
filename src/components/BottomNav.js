import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import PhoneIcon from "@mui/icons-material/Phone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useAuthState from "../hooks";
import fb from "../firebase";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


const BottomNav = () => {
  
  // const langChange=(option)=>{
  //   localStorage.setItem('lang', option);
  //   window.location.reload();
  // }
  // const lang = localStorage.getItem('lang') || 'en';

  const {user, initializing} = useAuthState(fb.auth());
  if (initializing) {
    return 'loading...';
}
  return (
    <div className="md:flex justify-between bg-orange-400">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-5 py-1 justify-between">
        
        <NavLinks text="Home" link="/" />
        <NavLinks text="Schemes" link="/record" />
        <NavLinks text="Contact Us" link="/contact-us" />
        {user ?<NavLinks text={"Profile"} link="/profile" /> :null}
      </div>
      <div className="flex px-3 py-4 space-x-5 ">
        <div>
            
        </div>
        <div className="text-right space-x-5 ">
          <FacebookIcon className="hover:cursor-pointer hover:text-blue-600 duration-300" />
          <InstagramIcon className="hover:cursor-pointer hover:text-pink-700 duration-300" />
          <TwitterIcon className="hover:cursor-pointer hover:text-blue-500 duration-300" />
      </div>
      </div>
    </div>
  );
};

export default BottomNav;

const NavLinks = ({ text, link }) => {
  
  return (
    <Link
      to={link}
      className="px-3 py-1 rounded-md hover:cursor-pointer hover:opacity-40 duration-300"
    >
      <div className="text-center">
        {text === "Home" ? (
          <HomeIcon />
        ) : text === "Schemes" ? (
          <InfoIcon />
        ) : text === "Contact Us" ? (
          <PhoneIcon />
        ) : text === "Profile" ? (
          <AccountCircleIcon />
        ) : (
          "none"
        )}
        <div className="text-sm">
          <span>{text}</span>
        </div>
      </div>
    </Link>
  );
};
