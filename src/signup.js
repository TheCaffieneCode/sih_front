import React from "react";
import fb from "./firebase";
import useAuthState from "./hooks";

export default function Signin() {
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
    return(
        <div>
            {user 
            ?<div className="mt-20 text-center">
                <img src={user.photoURL} alt="userImage" className="w-12 h-12 mx-auto"/>
                <p>{user.displayName}</p>
                <button className="border-2 border-black"
                onClick={signout}
                >sign out</button>
            </div>
            :<div className="mt-20 text-center">
                <button className="border-2 border-black"
                onClick={signinwithGoogle}
                >sign in with Google</button>
            </div>
        }
        </div>
        
    );
}