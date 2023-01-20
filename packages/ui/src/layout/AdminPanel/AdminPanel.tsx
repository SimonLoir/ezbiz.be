import EZBiz from 'ezbiz-sdk';
import Link from 'next/link';
import { useRef, useState } from 'react';
import LoginProvider from '../../auth/LoginProvider';

export default function AdminPanel({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<{ logout: () => void }>();
    return (
        <LoginProvider ref={ref}>
            {children}
            <button onClick={() => console.log(ref.current?.logout())}>
                Déconnexion
            </button>

            <Link
                href={'/invoices'}
                className='font-bold underline text-gray-400 p-18 m-10 hover:text-sky-700'
            >
                Factures
            </Link>
        </LoginProvider>
    );
}
