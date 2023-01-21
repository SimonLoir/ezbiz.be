import { useState } from 'react';
import Modal from '../layout/Modal';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

type LoginProviderProps = {
    onLogin: () => void;
};

export default function LoginProvider({ onLogin }: LoginProviderProps) {
    const [current, setCurrent] = useState<'login' | 'register'>('login');
    return (
        <Modal>
            <div className='text-center mb-4'>
                <img src='/logo.svg' className='h-[120px] m-auto' />
            </div>

            {current === 'login' && (
                <LoginScreen
                    onLogin={onLogin}
                    goToRegister={() => setCurrent('register')}
                />
            )}
            {current === 'register' && <RegisterScreen />}
        </Modal>
    );
}
