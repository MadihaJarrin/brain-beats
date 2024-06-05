import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/stem-logo-with-kids-cartoon-character-education-icon-elements_1308-62171.jpg?t=st=1717526018~exp=1717529618~hmac=44d5a94690fdc6cafc9691171ff8e61ecabe2ac2bfb8071c6806a25b31b05cb5&w=1380)' }}>
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-yellow-500 ">Learn & Grow!
                    </h1>
                    <p className="mb-5">To empower the next generation of innovators and thinkers by making coding and STEM education accessible, engaging, and fun through interactive and educational toys that inspire lifelong learning and creativity.</p>
                    <Link to={'/product'} className="btn btn-warning shadow-lg shadow-orange-500/50 text-white uppercase">Explore</Link>
                </div>
            </div>
        </div>
    )
}
