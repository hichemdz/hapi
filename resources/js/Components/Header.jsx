import React from 'react';
import Logo from '@/icons/Logo';
import { Link } from '@inertiajs/inertia-react';


function Header({ canLogin, canRegister }) {
    console.log(canLogin, canRegister);
    return (
        <header className='fixed top-0 lef-0 w-full '>
            <nav>
                <div className='py-5 flex itens-center justify-between max-w-6xl mx-auto'>
                    <Link href='/'>
                        <Logo />
                    </Link>


                    <div className='space-x-2'>
                        {
                            canLogin &&
                            <Link
                                className='px-3 py-2 border-green-100 rounded-sm text-green-50'
                                href={route('login')}>Login
                            </Link>
                        }
                        {
                            canRegister &&
                            <Link
                                className='px-3 py-2 border-green-100 rounded-sm bg-green-50'
                                href={route('register')}>Register
                            </Link>
                        }
                    </div>

                </div>

            </nav>
        </header>
    );
}

export default Header;