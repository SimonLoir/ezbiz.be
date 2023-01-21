import AdminPanel from 'ui/src/layout/AdminPanel';
import LoginProvider from 'ui/src/auth/LoginProvider';
import '../styles/globals.scss';
import { useEffect, useState } from 'react';
import EZBiz from 'ezbiz-sdk';
import UserRecord from 'ezbiz-sdk/records/UserRecord';

const { auth } = EZBiz;

export default function MyApp({ Component, pageProps }: any) {
    const [currentUser, setCurrentUser] = useState<UserRecord | null>(null);

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
        >
            <Component {...pageProps} />
        </AdminPanel>
    );
}
