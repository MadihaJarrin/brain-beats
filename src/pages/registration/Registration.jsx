import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/auth/google/GoogleLogin"
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../../firebase/firebase.config";
import registerImage from "../../assets/images/Authentication/regImage.jpg"
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Registration() {

    const [userInfo] = useAuthState(auth);
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error

    ] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp = (e) => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        // console.log(email, password)
        createUserWithEmailAndPassword(email, password, confirm_password)
    }


    useEffect(() => {
        if (userInfo) {
            navigate('/')
        }
        if (error) {
            console.log(error?.message)
            // return (
            //     <div>
            //         <p>Error: {error.message}</p>
            //     </div>
            // );
        }
    }, [navigate, userInfo, error])
    console.log(user, loading)


    return (
        <div className="hero min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${registerImage})` }}>
            <div className="hero-overlay bg-opacity-40 bg-black"></div>
            <div className="flex justify-start items-center h-full absolute inset-12 ">
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-60 rounded-lg py-4 mx-48">
                    <div>
                        <h1 className="text-5xl font-bold text-center">Registration</h1>
                    </div>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <span className="flex items-start">
                                <FaUser className="mr-2" />
                                <span>User Email</span>
                            </span>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="flex items-start">
                                    <RiLockPasswordFill />
                                    <span className="ml-2">Password</span>
                                </span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered"
                                name="password"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="flex items-start">
                                    <RiLockPasswordFill />
                                    <span className="ml-2">Confirm Password</span>
                                </span>                            </label>
                            <input
                                type="password"
                                placeholder="confirm password"
                                className="input input-bordered"
                                name="confirm_password"
                                required
                            />
                        </div>
                        {/* {!passMatch && (
                            <div className="my-2">
                                <p className="text-red-500">Passwords do not match!</p>
                            </div>
                        )} */}
                        {
                            error &&
                            <p className="alert alert-error">Error: {error.message}</p>
                        }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="m-2">
                            <p className="text-center">
                                Already Have An Account?

                                <Link to={'/register'} className="m-2 text-green-500  shadow-inner  bg-origin-content p-2 rounded-md shadow-white				"> Login </Link >
                            </p>
                        </div>
                    </form>
                    <div className="mx-8 mb-5">
                        <GoogleLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}
