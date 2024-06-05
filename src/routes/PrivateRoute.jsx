import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase/firebase.config';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <span className="loading loading-spinner text-warning">Loading...</span>
    }

    if (!user) {
        return <Navigate to={"/login"}></Navigate>
    }

    return (
        children
    )
}
