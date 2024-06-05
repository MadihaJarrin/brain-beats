import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const gogoleLogin = () => {
        return signInWithPopup(auth, googleProvider);

    };


    useEffect(() => {
        const unscubcribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser),
                    setLoading(false)
                console.log(currentUser);
            }
        });
        return () => {
            return unscubcribe();
        };
    }, []);

    const authInfo = {
        user,
        gogoleLogin,
        loading
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>

}

export default AuthProvider;