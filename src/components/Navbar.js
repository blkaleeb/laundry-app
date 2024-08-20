import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">Hello Laundry</div>
                <div className="hidden md:flex space-x-4">
                    <a href="#dashboard" className="text-gray-300 hover:text-white">
                        Dashboard
                    </a>
                    <a href="#pos" className="text-gray-300 hover:text-white">
                        POS
                    </a>
                    <a href="#loyalty" className="text-gray-300 hover:text-white">
                        Loyalty Program
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
                        <div className="transition-transform transform">
                            {isOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </div>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                className={`${
                    isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden transition-all duration-300 ease-out md:hidden`}
            >
                <ul className="space-y-4 mt-4">
                    <li>
                        <a href="#dashboard" className="text-gray-300 hover:text-white block">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#pos" className="text-gray-300 hover:text-white block">
                            POS
                        </a>
                    </li>
                    <li>
                        <a href="#loyalty" className="text-gray-300 hover:text-white block">
                            Loyalty Program
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
