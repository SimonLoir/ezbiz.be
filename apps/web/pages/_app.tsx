import AdminPanel from 'ui/src/layout/AdminPanel';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }: any) {
    return (
        <AdminPanel>
            <Component {...pageProps} />
        </AdminPanel>
    );
}
