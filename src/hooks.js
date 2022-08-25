import { useState } from "react";
import { useEffect } from "react";

export default function useAuthState(auth) {
    const[user, setuser] = useState(()=> auth.Currentuser);
    const[initializing, setintializing] = useState(true);

    useEffect(()=> {
        const subscribe = auth.onAuthStateChanged(user=>{
            if (user) {
                setuser(user);
            } else {
                setuser(false);
            }
            if (initializing) {
                setintializing(false);
            }
        });
        return subscribe;
    }, [auth, initializing]);
    return {user, initializing};
}