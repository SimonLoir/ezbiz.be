import { useState } from 'react';
import Input from './Input';

export default function RegisterScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    return (
        <>
            <div className='space-y-5'>
                <div className='flex space-x-4'>
                    <Input
                        id='name'
                        label='Votre prénom'
                        type='text'
                        placeholder='John'
                    />
                    <Input
                        id='lastname'
                        label='Votre nom'
                        type='text'
                        placeholder='Doe'
                    />
                </div>

                <Input
                    id='username'
                    label='Votre email'
                    type='email'
                    placeholder='name@company.com'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                    id='password'
                    label='Votre mot de passe'
                    type='password'
                    placeholder='·············'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    id='password2'
                    label='Répétez votre mot de passe'
                    type='password'
                    placeholder='·············'
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <div className='flex justify-between'>
                    <button className='text-primary font-semibold'>
                        Précédent
                    </button>
                    <button className='text-primary font-semibold'>
                        Suivant
                    </button>
                </div>
            </div>
        </>
    );
}
