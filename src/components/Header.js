import React from "react";
import Logo from "../images/header_logo.jpeg";
import SearchIcon from "@mui/icons-material/Search";
import fb from "../firebase";
import useAuthState from "../hooks";

const Header = () => {
  const signout=()=>{
    fb.auth().signOut();
  };
const {user, initializing} = useAuthState(fb.auth());
const signinwithGoogle= async()=> {
    const provider = new fb.auth.GoogleAuthProvider();
    fb.auth().useDeviceLanguage();

    try {
        await fb.auth().signInWithRedirect(provider);
    } catch (error) {
        console.log(error.message);
    }
};
if (initializing) {
    return 'loading...';
}
  return (
    <div className="px-5 md:px-10 py-6 bg-orange-300 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <img src={Logo} alt="Logo" className="h-7 w-7 md:h-12 md:w-12 rounded-full" />
        <h1 className="text-2xl md:text-4xl font-bold">सहदिव्या</h1>
      </div>
      <div className="bg-white px-3 py-1.5 rounded-md outline-none md:flex items-center justify-start space-x-2 flex-1 mx-5 hidden">
        <SearchIcon className="text-gray-600 hover:text-gray-900 duration-300" />
        <input type="text" className="outline-none flex-1" />
      </div>

      <div className="flex space-x-5">
        {user
          ?<div>
          <button className=" bg-pink-200 rounded-lg px-4 p-2"
          onClick={signout}
          >sign out</button>
          </div>
         
          :<button className="border-2 border-green-500 bg-green-500 rounded-lg px-4 p-2"
          onClick={signinwithGoogle}
          >Register</button>
        }
      </div>
    </div>
  );
};

export default Header;


