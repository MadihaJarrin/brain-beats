import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";
import { CiWavePulse1 } from "react-icons/ci";

export default function Navbar() {
    const [signOut] = useSignOut(auth);
    const [user] = useAuthState(auth);
    // console.log(user.email);

    const handleSignOut = async () => {

        const success = await signOut();
        if (success) {
            alert('You are sign out');

        }
    }

    return (
        <div className="navbar bg-yellow-300 p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                        {/* <li>
                            <Link to={'/dashboard'}>Dashboard</Link>
                        </li> */}
                        <li>
                            <Link to={'/product'}>Products</Link>
                        </li>
                        <li>
                            <Link to={'/about'}>About</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <p className="btn btn-ghost text-4xl text-rose-950	font-mono italic">Brain-Beats <CiWavePulse1 />
                </p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    {/* <li>
                        <Link to={'/dashboard'}>Dashboard</Link>
                    </li> */}
                    <li>
                        <Link to={'/product'}>Products</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !user?.email ?
                        (
                            <>
                                <Link to={"/login"} className="btn mr-2">
                                    Login
                                </Link>
                                <Link to={"/register"} className="btn">
                                    Registration
                                </Link>
                            </>
                        ) : (
                            <div className="flex gap-2">
                                <Link to={"/profile"}>

                                    <div className="avatar placeholder">
                                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                                            <span className="text-xs">Profile</span>
                                        </div>
                                    </div>

                                </Link>
                                <Link to={"/dashboard"} className="btn">Dashboard</Link>

                                <Link onClick={handleSignOut} className="btn">LogOut</Link>
                            </div>
                        )
                }


            </div>
        </div>
    )
}
