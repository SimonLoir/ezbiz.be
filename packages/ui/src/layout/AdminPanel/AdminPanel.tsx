import EZBiz from 'ezbiz-sdk';
import Link from 'next/link';
import { useRef, useState } from 'react';
import LoginProvider from '../../auth/LoginProvider';

const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Factures', url: '/invoices' },
];

export default function AdminPanel({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<{ logout: () => void }>();
    return (
        <LoginProvider ref={ref}>
            <div className='fixed grid grid-cols-panel top-0 left-0 right-0 bottom-0 font-montserrat'>
                <nav className='grid bg-indigo-600 grid-rows-panel'>
                    <div className='text-white grid justify-center items-center font-semibold text-2xl tracking-wide'>
                        EZbiz
                    </div>
                    <div>
                        {menuItems.map((item, i) => (
                            <div
                                className='text-white p-4 text-medium'
                                key={item.url}
                            >
                                <Link href={item.url}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </nav>
                <div className='grid grid-rows-panel'>
                    <header className='leading-[65px] text-xl font-semibold px-5 shadow-lg z-90 tracking-wide'>
                        Test page
                    </header>
                    <main className='p-5 bg-gray-100 z-85'>{children}</main>
                </div>
            </div>
        </LoginProvider>
    );
}
