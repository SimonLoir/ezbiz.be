import EZBiz from 'ezbiz-sdk';
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
        </LoginProvider>
    );
}
