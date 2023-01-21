import Modal from '../layout/Modal';
import LoginScreen from './LoginScreen';

type LoginProviderProps = {
    onLogin: () => void;
};

export default function LoginProvider({ onLogin }: LoginProviderProps) {
    return (
        <Modal>
            <div className='text-center'>
                <img src='/logo.svg' className='h-16 m-auto mb-4' />
            </div>

            <LoginScreen onLogin={onLogin} />
        </Modal>
    );
}
