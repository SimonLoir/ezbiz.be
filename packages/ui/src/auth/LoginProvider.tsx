import EZBiz from 'ezbiz-sdk';
import CredentialsError from 'ezbiz-sdk/exceptions/CredentialsError';
import {
    createRef,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';
import Modal from '../layout/Modal';

type LoginProviderProps = {
    children: React.ReactNode;
    logoutProvider?: (cb: () => void) => void;
};

export default forwardRef(function LoginProvider(
    { children, logoutProvider }: LoginProviderProps,
    ref
) {
    const { auth } = EZBiz;
    const [valid, setValid] = useState(false);
    const usernameRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();
    const [error, setError] = useState('');

    useEffect(() => {
        setValid(auth.isValid);
    }, [auth, logoutProvider]);

    useImperativeHandle(ref, () => ({
        logout: () => {
            auth.logout();
            setValid(false);
        },
    }));

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (username && password) {
            try {
                await auth.login(username, password);
                if (!auth.isValid)
                    throw new CredentialsError('Invalid credentials');
                setValid(true);
            } catch (error) {
                if (error instanceof CredentialsError) {
                    console.log('Invalid credentials');
                }
                setValid(false);
                setError("Nom d'utilisateur ou mot de passe incorrect");
            }
        } else {
            setValid(false);
            setError('Veuillez remplir tous les champs');
        }
    };

    if (valid) return <>{children}</>;
    return (
        <Modal>
            <h1>Me connecter</h1>
            <form onSubmit={onSubmit}>
                <p>{error}</p>
                <input type='text' ref={usernameRef} autoComplete='username' />
                <input
                    type='password'
                    ref={passwordRef}
                    autoComplete='password'
                />
                <button>Se connecter</button>
            </form>
        </Modal>
    );
});
