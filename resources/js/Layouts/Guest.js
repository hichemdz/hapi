import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import Logo from '@/icons/Logo';

export default function Guest({ children, title }) {
    return (
        <div  className="bg-gradient-to-bl from-green-950 bg-green-900 min-h-screen flex  sm:px-0 flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">

            <div style={{maxWidth:"22rem"}} className=" space-y-4 py-5 w-full shadow-xl border-green-900 sm:max-w-sm mt-6 px-6 py-4 bg-gradient-to-bl from-green-950 bg-green-900 shadow-md overflow-hidden sm:rounded-lg">
                <div className='flex items-center justify-center' >
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>
                <div className='pr-4'>
                    <h1 className='uppercase text-center text-green-100 font-black text-cener text-2xl' >{title}</h1>
                </div>
                {children}
            </div>
        </div>
    );
}
