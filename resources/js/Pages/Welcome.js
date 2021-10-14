import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import HeroImage from '@/hero/HeroImage';
import Button from '@/Components/Button';
import Header from '@/Components/Header';
export default function Welcome(props) {
    const {canLogin,canRegister} = props;
 
    return (
        <div className='relative bg-gradient-to-bl from-green-950 bg-green-900'>
            <Header canLogin={true} canRegister={true} />
            <div className='h-screen flex items-center mx-auto max-w-6xl text-green-100'>
                <div className='w-full items-center  grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-6  '>
                        <div className=' space-y-5'>
                            <h1 className='text-5xl max-w-lg font-black leading-tight'>Best tools Hospital Managment API</h1>
                            <h2 className='text-2xl max-w-md font-bold leading-tight'>Lk Api Hospital Free API solution to link your project more than of platform</h2>
                            <p className='text-seminold max-w-md leading-tight'>We will give you all that you need for created advanced Hospital management for your project, One back-end and a lot of front-end (Mobile, Desktop, Web)</p>
                            <Button className='py-2 bg-green-950'>
                                Satart for free
                            </Button>
                        </div>
                    </div >
                    <div className='col-span-12 flex items-center justify-end  md:col-span-6'>

                        <HeroImage className='' />
                    </div>
                </div>
            </div>
        </div>
    );
}
