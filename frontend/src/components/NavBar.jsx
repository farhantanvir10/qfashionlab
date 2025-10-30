import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon from '../assets/favicon.png';
import { Link } from 'react-router-dom';

function NavBar({ setSearchQuery }) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm m">
            {/* Main Navigation */}
            <nav className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={icon} className="w-10 h-10 md:w-12 md:h-12" alt="Q Fashion Lab" />
                        <h1
                            className="text-xl md:text-2xl font-extrabold tracking-wide text-gray-800"
                            style={{ fontFamily: 'ChickenDinner, sans-serif' }}
                        >
                            Q Fashion Lab
                        </h1>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none md:flex items-center gap-6 text-lg font-medium px-4 py-3 md:py-0 transition-all duration-300 ease-in-out ${
                        menuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <Link
                        to="/"
                        className="block md:inline-block px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        className="block md:inline-block px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        to="/about"
                        className="block md:inline-block px-3 py-2 rounded-lg hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
