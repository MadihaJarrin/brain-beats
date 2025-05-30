import { Link } from "react-router-dom";
import bannerImg from "../../../assets/images/Home/cover.png"

export default function Banner() {
    return (
        <div className="hero min-h-screen"
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay bg-opacity-75"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-green-500 ">Learn & Grow!
                    </h1>
                    <p className="mb-5">To empower the next generation of innovators and thinkers by making coding and STEM education accessible, engaging, and fun through interactive and educational toys that inspire lifelong learning and creativity.</p>
                    <Link to={'/product'} className="btn btn-success shadow-lg shadow-orange-500/50 text-white uppercase">Explore</Link>
                </div>
            </div>
        </div>
    )
}
