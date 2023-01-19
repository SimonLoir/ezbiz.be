import AdminPanel from 'ui/layout/AdminPanel';

export default function MyApp({ Component, pageProps }: any) {
    return (
        <AdminPanel>
            <Component {...pageProps} />
        </AdminPanel>
    );
}
