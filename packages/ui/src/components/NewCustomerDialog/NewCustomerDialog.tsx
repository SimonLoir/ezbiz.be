import EZBiz from 'ezbiz-sdk';
import { useState } from 'react';
import Dialog from '../Dialog';
import Input from '../Input';
import Title from '../Title';

type NewCustomerDialogProps = {
    onHide: () => void;
};

const { customers } = EZBiz;

export default function NewCustomerDialog({ onHide }: NewCustomerDialogProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [vatNumber, setVatNumber] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const customer = await customers.create({
                name: name,
                address: address,
                email: email,
                phone_number: phone,
                vat_number: vatNumber,
            });
            onHide();
        } catch (error) {}
    };
    return (
        <Dialog>
            <Title text='Nouveau client' />
            <form onSubmit={onSubmit}>
                <div className='space-y-3'>
                    <div className='flex space-x-4'>
                        <Input
                            id='customer-name'
                            label='Nom'
                            placeholder='John Doe'
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            id='customer-email'
                            label='Email'
                            placeholder='contact@email.com'
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex space-x-4'>
                        <Input
                            id='customer-vat-number'
                            label='N° TVA'
                            placeholder='BE0xxxxxxxxx'
                            type='text'
                            value={vatNumber}
                            onChange={(e) => setVatNumber(e.target.value)}
                        />
                        <Input
                            id='customer-phone'
                            label='N° téléphone'
                            placeholder='04xx xx xx xx'
                            type='text'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <Input
                            type='textarea'
                            id='customer-address'
                            label='Adresse'
                            placeholder={'Rue numéro,\nCP Ville (Pays)'}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div className='flex justify-end space-x-4'>
                        <button onClick={() => onHide()} type='button'>
                            Annuler
                        </button>
                        <button
                            className='bg-primary text-white p-4 py-2 rounded-lg disabled:bg-near-white disabled:text-near-black'
                            disabled={false}
                        >
                            Confirmer
                        </button>
                    </div>
                </div>
            </form>
        </Dialog>
    );
}
