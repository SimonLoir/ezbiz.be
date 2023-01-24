import { useState } from 'react';
import Input from './Input';

export default function StructuredCommunication() {
    const [auto, setAuto] = useState(true);
    return (
        <div>
            <input
                type='checkbox'
                checked={auto}
                id='auto-communication'
                onChange={(e) => setAuto(e.target.checked)}
                className='cursor-pointer'
            />
            <label htmlFor='auto-communication' className='ml-1 cursor-pointer'>
                Communication structurée automatique
            </label>
            {!auto && (
                <Input
                    id='communication'
                    label='Communication'
                    placeholder='202x000x'
                    type='text'
                />
            )}
        </div>
    );
}
