
// eslint-disable-next-line no-unused-vars
import aboutLogo from "../../assets/images/About/brain beats logo.png";
import missionImg from "../../assets/images/Home/4419038.jpg"
export default function About() {
    return (
        <div className="bg-gradient-to-br from-white via-[#E3F9F1] to-[#D9F2EA] min-h-screen py-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-gray-800">
                {/* Logo Centered */}
                <div className="flex justify-center mb-8">
                    <img
                        src={aboutLogo} // make sure the logo is in your public folder or update the path accordingly
                        alt="Brain Beats Logo"
                        className="w-32 md:w-40 drop-shadow-lg animate-pulse"
                    />
                </div>


                {/* Headings */}
                <h1 className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-4">We Are Genius Mind Developers</h1>


                {/* Content Section */}
                <div className="mt-12 bg-white p-6 md:p-10 rounded-2xl shadow-md max-w-7xl mx-auto border-l-4 border-[#1d5c4c]">
                    <h2 className="text-3xl font-bold text-[#1d5c4c] mb-4 flex items-center gap-2">
                        👩‍🏫 Who We Are
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>Brain Beats</strong> is more than just a toy brand — were a movement to inspire young
                        minds. Founded by a passionate team of educators, tech enthusiasts, and child development
                        specialists, we believe that play is the most powerful form of learning.
                    </p>

                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                        With every puzzle solved, every code cracked, and every invention imagined, we aim to turn
                        curiosity into confidence. We design each of our products with purpose — blending fun with
                        foundational skills in logic, creativity, and critical thinking.
                    </p>

                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                        From STEM kits to interactive learning tools, Brain Beats is here to spark a lifelong love of
                        learning — one brilliant little brain at a time.
                    </p>
                </div>

                {/* Right Content */}
                {/* <div>
                        <h2 className="text-2xl font-semibold mb-4 text-[#1F9A73]">Our Mission</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>Transform screen time into smart time</li>
                            <li>Introduce coding and STEM through toys</li>
                            <li>Empower parents with brain-boosting tools</li>
                            <li>Make learning joyful, hands-on, and meaningful</li>
                        </ul>
                    </div> */}


                <div className="mt-12 bg-[#f0fdfa] p-6 md:p-10 rounded-2xl shadow-md max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        {/* Image */}
                        <div className="lg:w-1/2">
                            <img
                                src={missionImg}
                                alt="Our Mission"
                                className="w-full rounded-xl shadow-lg"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-[#1d5c4c] mb-4 flex items-center gap-2">
                                🎯 Our Mission
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                At <strong>Brain Beats</strong>, our mission is to spark curiosity, fuel creativity,
                                and build strong foundations in STEM through joyful, hands-on learning. We believe
                                every child deserves a playful pathway to think logically, explore confidently, and
                                thrive in a tech-forward world — all while having fun!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-2 text-[#1d5c4c]">📍 Our Location</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.6721091288025!2d90.4295425149817!3d23.75812568458264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7969e1b8c7b%3A0xd1a0b5a5b0f626e!2sBashundhara%20Residential%20Area!5e0!3m2!1sen!2sbd!4v1684762872072!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>


                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-yellow-600 mb-2">
                        Join the Brain Beats Movement!
                    </h3>
                    <p className="text-gray-600">
                        Let’s raise a generation of thinkers, creators, and doers—one beat at a time.
                    </p>
                </div>
            </div>
        </div>
    )
}
