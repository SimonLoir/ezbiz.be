import { useState } from 'react';
import Input from './Input';

export default function InvoiceNumber() {
    const [auto, setAuto] = useState(true);
    return (
        <div>
            <input
                type='checkbox'
                checked={auto}
                id='auto-invoice-number'
                onChange={(e) => setAuto(e.target.checked)}
                className='cursor-pointer'
            />
            <label
                htmlFor='auto-invoice-number'
                className='ml-1 cursor-pointer'
            >
                Numéro de facture automatique
            </label>
            {!auto && (
                <Input
                    id='invoice-number'
                    label='Numéro de facture'
                    placeholder='202x000x'
                    type='text'
                />
            )}
        </div>
    );
}
