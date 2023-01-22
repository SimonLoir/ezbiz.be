import AdminPanel from 'ui/src/layout/AdminPanel';
import LoginProvider from 'ui/src/auth/LoginProvider';
import '../styles/globals.scss';
import { useEffect, useState } from 'react';
import EZBiz from 'ezbiz-sdk';
import UserRecord from 'ezbiz-sdk/records/UserRecord';
import { useRouter } from 'next/router';

EZBiz.config = {
    host: 'http://192.168.1.21',
    port: '8090',
};

const { auth } = EZBiz;

export default function MyApp({ Component, pageProps }: any) {
    const [currentUser, setCurrentUser] = useState<UserRecord | null>(null);
    const router = useRouter();
    let pageTitle = 'EZBiz';
    if (router.pathname === '/new-invoice') {
        pageTitle = 'Nouvelle facture';
    } else if (router.pathname === '/invoices') {
        pageTitle = 'Factures';
    } else if (router.pathname === '/customers') {
        pageTitle = 'Clients';
    }

    useEffect(() => {
        if (!auth.isValid) return;
        auth.updateUser(() => {
            setCurrentUser(auth.user);
        });
    }, []);

    const onLogin = () => {
        setCurrentUser(auth.user);
    };

    if (!currentUser) return <LoginProvider onLogin={onLogin} />;

    return (
        <AdminPanel
            user={currentUser}
            logout={() => {
                auth.logout();
                setCurrentUser(null);
            }}
            pageTitle={pageTitle}
        >
            <Component {...pageProps} />
        </AdminPanel>
    );
}
