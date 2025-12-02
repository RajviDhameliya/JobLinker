import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white pt-12 pb-6 border-t">
            <div className="container mx-auto px-12">
                {/* TOP SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    {/* LEFT LOGO */}
                    <div className="mb-6 md:mb-0 flex items-center">
                        <h2 className='text-2xl font-bold'>Job<span className='text-[#f83002]'>Linker</span></h2>
                    </div>
                    {/* CENTER LINKS */}
                    <div className="flex space-x-8 text-gray-700 text-sm mb-6 md:mb-0">
                        <a href="#" className="hover:text-black">About</a>
                        <a href="#" className="hover:text-black">Contact</a>
                        <a href="#" className="hover:text-black">Advertise</a>
                        <a href="#" className="hover:text-black">Terms</a>
                        <a href="#" className="hover:text-black">Privacy</a>
                    </div>
                    {/* RIGHT SOCIAL ICONS */}
                    <div className="flex space-x-5">
                        {/* Facebook */}
                        <a href="#" className="text-gray-700 hover:text-black">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.676 0H1.324C.593 0 0 .593 0 
                1.324v21.352C0 23.407.593 24 1.324 
                24h11.495v-9.294H9.691V11.41h3.129V8.808c0-3.1 
                1.894-4.788 4.659-4.788 1.325 0 2.463.099 
                2.795.143v3.24h-1.918c-1.505 0-1.796.716-1.796 1.765v2.242h3.587l-.467 3.296h-3.12V24h6.117C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0z" />
                            </svg>
                        </a>
                        {/* YouTube */}
                        <a href="#" className="text-gray-700 hover:text-black">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a2.974 2.974 0 00-2.093-2.103C19.505 
                3.5 12 3.5 12 3.5s-7.505 0-9.405.583A2.974 
                2.974 0 00.502 6.186C0 8.09 0 12 0 
                12s0 3.91.502 5.814a2.974 2.974 0 002.093 
                2.103C4.495 20.5 12 20.5 12 20.5s7.505 
                0 9.405-.583a2.974 2.974 0 002.093-2.103C24 
                15.91 24 12 24 12s0-3.91-.502-5.814zM9.75 
                15.568V8.432L15.818 12 9.75 15.568z" />
                            </svg>
                        </a>
                        {/* Twitter / X */}
                        <a href="#" className="text-gray-700 hover:text-black">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 
                8.502 11.24H16.48l-5.448-7.13-6.229 
                7.13H1.5l7.73-8.84L1.254 2.25H7.68l4.94 
                6.588 5.624-6.588z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="text-gray-700 hover:text-black">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452H16.86v-5.569c0-1.331-.025-3.046-1.859-3.046-1.859 
                0-2.144 1.45-2.144 2.948v5.667h-3.587V9h3.444v1.561h.05c.48-.907 
                1.65-1.859 3.394-1.859 3.628 0 4.297 2.387 4.297 
                5.493v6.257zM5.337 7.433a2.07 2.07 0 01-2.07-2.07c0-1.144.926-2.07 
                2.07-2.07 1.144 0 2.07.926 2.07 
                2.07 0 1.144-.926 2.07-2.07 2.07zM7.119 
                20.452H3.554V9h3.565v11.452zM22.225 
                0H1.771C.792 0 0 .774 0 1.729v20.542C0 
                23.227.792 24 1.771 24h20.451C23.2 24 
                24 23.227 24 22.271V1.729C24 
                .774 23.2 0 22.225 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* BOTTOM SECTION */}
                <div className="border-t pt-6 text-center">
                    <p className="text-gray-700 text-sm font-medium">© 2024. All Rights Reserved.</p>
                    <p className="text-gray-600 text-sm">
                        Built by <span className="font-medium">Rajvi</span> with <span className="text-blue-500">💙</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
