import React from 'react';
import image from './heroimg.jpg';
import { FaStickyNote, FaMobileAlt, FaThumbsUp, FaBookOpen, FaBell, FaHeart } from 'react-icons/fa';

const features = [
    {
        icon: <FaStickyNote className="text-white text-xl" />,
        title: 'Unlimited entries',
        desc: 'Unlike other journaling platforms, you can write as much and as often as you like, all for free.'
    },
    {
        icon: <FaMobileAlt className="text-white text-xl" />,
        title: 'Mobile apps',
        desc: 'You can write in your journal when not at your computer with our iOS and Android apps.'
    },
    {
        icon: <FaThumbsUp className="text-white text-xl" />,
        title: 'Saves as you go',
        desc: 'Never worry about losing your work — saves as you type at your computer or on the go.'
    },
    {
        icon: <FaBookOpen className="text-white text-xl" />,
        title: 'Custom journals',
        desc: 'Choose different covers, backgrounds, fonts and more for each of your journals and entries.'
    },
    {
        icon: <FaBell className="text-white text-xl" />,
        title: 'Reminders',
        desc: 'Set daily, weekly or custom reminders to ensure that you never forget to write in your journal.'
    },
    {
        icon: <FaHeart className="text-white text-xl" />,
        title: 'So much more...',
        desc: 'Enjoy unlimited devices, encryption, tagging, prompts, journal locking, sharing and more.'
    }
];

const HeroFullPage = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-purple-50 min-h-screen flex items-center px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="max-w-xl space-y-6">
                        <p className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                            Your private, 100% customizable online journal.
                        </p>
                        <p className="text-lg md:text-xl text-black">
                            Loved by over <span className="font-semibold text-blue-600">2 million journalers</span> around the world.
                        </p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md">
                            Start your free journal today :)
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src={image} alt="Hero" className="rounded-xl shadow-lg w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white min-h-screen py-24 px-8 md:px-20 flex items-center">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center space-y-4">
                            <div className="mx-auto bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-black">{feature.title}</h3>
                            <p className="text-gray-600 text-md">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Journal Section */}
            <section className="bg-blue-50 min-h-screen flex items-center px-8 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-5xl font-extrabold text-black leading-tight">
                            Why Start Journaling?
                        </h2>
                        <ul className="space-y-6 text-2xl text-gray-800">
                            <li>✅ Clear your mind and reduce stress</li>
                            <li>✅ Track goals and stay motivated</li>
                            <li>✅ Develop self-awareness and gratitude</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://images.unsplash.com/photo-1603574670812-d24560880210?auto=format&fit=crop&w=800&q=80"
                            alt="Journaling Benefits"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>


            {/* App Download Section */}
            <section className="bg-white min-h-screen flex items-center px-8 py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-5xl font-extrabold text-black leading-tight">
                            Your Journal, Anywhere
                        </h2>
                        <p className="text-2xl text-gray-700 max-w-xl">
                            Use our mobile apps for iOS and Android to stay consistent wherever you are.
                            Journaling on the go has never been easier.
                        </p>
                        <div className="flex gap-6">
                            <a href="#">
                                <img
                                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                    alt="App Store"
                                    className="h-14 hover:scale-105 transition-transform duration-200"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Get_it_on_Google_play.svg"
                                    alt="Google Play"
                                    className="h-14 hover:scale-105 transition-transform duration-200"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img
                            src="https://i.imgur.com/mE6zAej.png"
                            alt="App preview"
                            className="rounded-xl shadow-2xl w-full object-contain"
                        />
                    </div>
                </div>
            </section>



            {/* Testimonials Section */}
            <section className="bg-blue-50 min-h-screen py-20 px-6 flex items-center">
                <div className="max-w-5xl mx-auto text-center space-y-10">
                    <h2 className="text-4xl font-bold text-black">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Amazing app!', 'Helps me reflect daily', 'My go-to journal'].map((review, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-gray-700">
                                <p>“{review}”</p>
                                <p className="mt-4 text-sm text-gray-500">– Happy Journaler</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-100 min-h-screen py-24 px-8 flex flex-col items-center justify-center text-black text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Start Journaling?</h2>
                <p className="mb-6 text-lg">Create your free private journal in under a minute.</p>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-100 transition">
                    Sign Up Now
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-gray-300 py-10 px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
                    <div>
                        <h3 className="text-lg font-bold mb-2">hushh..</h3>
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#" className="hover:text-white">Features</a>
                        <a href="#" className="hover:text-white">Support</a>
                        <a href="#" className="hover:text-white">Contact</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HeroFullPage;