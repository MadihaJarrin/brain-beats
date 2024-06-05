import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/auth/google/GoogleLogin"
import auth from "../../firebase/firebase.config";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";

export default function Login() {
    const [userInfo] = useAuthState(auth);
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
    }, [navigate, userInfo])
    console.log(user, loading, error)

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        {
                            error &&
                            <p className="alert alert-error">Error: {error.message}</p>
                        }
                        <div className="m-2">
                            <p className="text-center">
                                Create a New Account

                                <Link to={'/register'} className="m-2 text-orange-600  shadow-inner  bg-origin-content p-2 rounded-md shadow-orange-600				">Register Now</Link >
                            </p>
                        </div>
                    </form>
                    <div className="mx-8 mb-5">
                        <GoogleLogin />

                    </div>
                </div>
            </div>
        </div>
    );

}
