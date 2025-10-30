import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPlus, FaBoxOpen, FaChevronRight, FaChevronLeft, FaSignOutAlt } from 'react-icons/fa';
import icon from '../assets/favicon.png';

function SellerNavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/seller-login');
    };

    return (
        <div className="m-0">
            <div className="flex items-center justify-between px-6 bg-white shadow-md">
                <div className="flex items-center gap-2">
                    <img src={icon} className="w-12 h-12" alt="Logo" />
                    <h1 className="text-2xl font-extrabold text-gray-700 md:block hidden">
                        Q Fashion Lab
                    </h1>
                </div>
                <div className="flex items-center">
                    <Link
                        to="/admin-add-product"
                        className="flex items-center gap-3 px-6 py-3 hover:bg-gray-200"
                    >
                        <FaPlus /> Add Product
                    </Link>
                    <Link
                        to="/admin-view"
                        className="flex items-center gap-3 px-6 py-3 hover:bg-gray-200"
                    >
                        <FaBoxOpen /> View Product
                    </Link>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-3 text-red-600 hover:text-red-800 text-lg font-semibold"
                >
                    <FaSignOutAlt className="text-2xl" /> Logout
                </button>
            </div>
        </div>
    );
}

export default SellerNavBar;
