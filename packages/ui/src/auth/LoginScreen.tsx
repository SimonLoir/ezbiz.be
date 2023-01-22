import EZBiz from 'ezbiz-sdk';
import CredentialsError from 'ezbiz-sdk/exceptions/CredentialsError';
import { createRef, useState } from 'react';
import Input from '../components/Input';
type LoginScreenProps = {
    onLogin: () => void;
    goToRegister: () => void;
};
export default function LoginScreen({
    onLogin,
    goToRegister,
}: LoginScreenProps) {
    const { auth } = EZBiz;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        if (disabled) return;
        e.preventDefault();
        setDisabled(true);
        if (username && password) {
            try {
                await auth.login(username, password);
                if (!auth.isValid)
                    throw new CredentialsError('Invalid credentials');
                onLogin();
            } catch (error) {
                if (error instanceof CredentialsError) {
                    setError("Nom d'utilisateur ou mot de passe incorrect");
                } else {
                    setError('Une erreur inconnue est survenue');
                }
            }
        } else {
            setError('Veuillez remplir tous les champs');
        }
        setDisabled(false);
    };

    return (
        <form onSubmit={onSubmit} className='space-y-5'>
            <p>{error}</p>
            <Input
                id='username'
                label='Votre email'
                type='email'
                placeholder='name@company.com'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <Input
                id='password'
                label='Votre mot de passe'
                type='password'
                placeholder='·············'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
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
                <span
                    className='text-primary font-semibold cursor-pointer'
                    onClick={goToRegister}
                >
                    Créer un compte
                </span>
            </p>
        </form>
    );
}
