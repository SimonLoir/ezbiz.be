import EZBiz from 'ezbiz-sdk';
import CredentialsError from 'ezbiz-sdk/exceptions/CredentialsError';
import { createRef, useState } from 'react';
type LoginScreenProps = {
    onLogin: () => void;
};
export default function LoginScreen({ onLogin }: LoginScreenProps) {
    const { auth } = EZBiz;
    const usernameRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        if (disabled) return;
        e.preventDefault();
        setDisabled(true);
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        if (username && password) {
            try {
                await auth.login(username, password);
                if (!auth.isValid)
                    throw new CredentialsError('Invalid credentials');
                onLogin();
            } catch (error) {
                if (error instanceof CredentialsError) {
                    console.log('Invalid credentials');
                }
                setError("Nom d'utilisateur ou mot de passe incorrect");
            }
        } else {
            setError('Veuillez remplir tous les champs');
        }
        setDisabled(false);
    };

    return (
        <form onSubmit={onSubmit} className='space-y-5'>
            <p>{error}</p>
            <div>
                <label htmlFor='username' className='block mb-2'>
                    Votre email
                </label>
                <input
                    type='email'
                    ref={usernameRef}
                    autoComplete='username'
                    id='username'
                    className='w-full bg-near-white border border-subtle-gray rounded-lg mt-0 p-2.5'
                    placeholder='name@company.com'
                />
            </div>
            <div>
                <label htmlFor='password' className='block mb-2'>
                    Votre mot de passe
                </label>
                <input
                    type='password'
                    ref={passwordRef}
                    autoComplete='password'
                    id='password'
                    className='w-full bg-near-white border border-subtle-gray rounded-lg mt-0 p-2.5'
                    placeholder='·············'
                />
            </div>
            <button
                className='w-full bg-primary text-white p-2.5 rounded-lg disabled:opacity-75'
                disabled={disabled}
            >
                Se connecter
            </button>
            <button className='w-full text-primary text-bold'>
                Mot de passe oublié
            </button>
            <p className='text-center'>
                Pas encore de compte ?{' '}
                <span className='text-primary font-semibold cursor-pointer'>
                    Créer un compte
                </span>
            </p>
        </form>
    );
}
