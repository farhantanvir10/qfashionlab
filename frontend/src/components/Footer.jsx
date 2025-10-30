import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import hero from '../assets/hero.jpeg';

function Footer() {
    const backgroundStyle = {
        backgroundImage: `url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    };
    const overlayStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    };
    return (
        <div className="" style={backgroundStyle}>
            <div className="text-white py-15 px-6 md:px-20" style={overlayStyle}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h2 className="text-lg font-bold mb-3">Support</h2>
                        <p className="text-gray-200">Q Fashion Lab</p>
                        <p className="mt-2 text-gray-200">farhantanvir10110@gmail.com</p>
                        <p className="mt-2 text-gray-200">+8809638616742</p>
                    </div>

                    <div className="md:text-center">
                        <h2 className="text-lg font-bold mb-3">Address</h2>
                        <ul className="space-y-2 text-gray-200">
                            <li className="select-none">Islambagh Mosque</li>
                            <li className="select-none">Notunpara, Demra</li>
                            <li className="select-none">Jatrabari Dhaka 1236</li>
                            <li className="select-none">Bangladesh</li>
                        </ul>
                    </div>

                    <div className="md:text-right">
                        <h2 className="text-lg font-bold mb-3">Quick Link</h2>
                        <ul className="space-y-2 text-gray-200">
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Terms Of Use</li>
                            <li className="cursor-pointer">FAQ</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 text-center border-t border-gray-700 pt-4 text-gray-400 text-sm">
                    © Copyright anumhosen 2025. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Footer;
