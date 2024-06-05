

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleLogin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    // const handleGoogleLogin = () => {
    //     signInWithGoogle()
    // };

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
        } catch (e) {
            console.error('Google sign-in error:', e);
        }
    };
    console.log('User:', user);
    console.log('Loading:', loading);
    console.log('Error:', error);

    return (
        <div>

            <button onClick={handleGoogleLogin} className="btn w-full">
                <div className="flex items-center gap-2">
                    <FcGoogle size={24} />
                    <p>Google</p>
                </div>
            </button>
        </div>
    )
}



// import { FcGoogle } from "react-icons/fc";
// import useAuth from "../../../hooks/useAuth";

// const GoogleLogin = () => {

//     const { googleLogin } = useAuth();

//     const handleGoogleSignIn = () => {
//         googleLogin();
//     };

//     return (
//         <button onClick={handleGoogleSignIn} className="btn w-full">
//             <div className="flex items-center gap-2">
//                 <FcGoogle size={24} />
//                 <p>Google</p>
//             </div>
//         </button>
//     );

// };

// export default GoogleLogin;
