import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-50 shadow-md px-8 py-4 flex items-center justify-between">
            <Link to='/' className="text-xl font-bold text-blue-700">hushh..</Link>

            <div className="flex items-center space-x-8 justify-center flex-1">
                <Link to="/" className="text-slate-800 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Home
                </Link>
                <div className="w-16"></div>
                <Link to="/support" className="text-slate-800 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Support
                </Link>
                <div className="w-16"></div>
                <Link to="/community" className="text-slate-800 font-semibold hover:text-blue-700 transition-colors duration-200">
                    Community
                </Link>

                <div className="w-32"></div>

                <Link to="/login" className="bg-white border border-blue-500 text-blue-600 font-semibold px-5 py-2 rounded-full shadow-sm hover:bg-blue-100 transition duration-200">
                    Login / Signup
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
