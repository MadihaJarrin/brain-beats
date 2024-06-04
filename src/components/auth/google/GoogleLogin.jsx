import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';

export default function GoogleLogin() {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleLogin = () => {
        signInWithGoogle()
    };

    console.log(user, loading, error);

    return (
        <div>
            <button onClick={handleGoogleLogin}
                className="bg-lime-400 px-5 py-3 w-full rounded-lg">Google Login</button>
        </div>
    )
}
