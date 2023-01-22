import Dialog from '../Dialog';
import Input from '../Input';
import Title from '../Title';

type NewCustomerDialogProps = {
    onHide: () => void;
};

export default function NewCustomerDialog({ onHide }: NewCustomerDialogProps) {
    return (
        <Dialog>
            <Title text='Nouveau client' />
            <div className='space-y-3'>
                <div className='flex space-x-4'>
                    <Input
                        id='customer-name'
                        label='Nom'
                        placeholder='John Doe'
                        type='text'
                    />
                    <Input
                        id='customer-email'
                        label='Email'
                        placeholder='contact@email.com'
                        type='email'
                    />
                </div>
                <div className='flex space-x-4'>
                    <Input
                        id='customer-vat-number'
                        label='N° TVA'
                        placeholder='BE0xxxxxxxxx'
                        type='text'
                    />
                    <Input
                        id='customer-phone'
                        label='N° téléphone'
                        placeholder='04xx xx xx xx'
                        type='text'
                    />
                </div>
                <div>
                    <Input
                        type='textarea'
                        id='customer-address'
                        label='Adresse'
                        placeholder={'Rue numéro,\nCP Ville (Pays)'}
                    />
                </div>
                <div className='flex justify-end space-x-4'>
                    <button onClick={() => onHide()}>Annuler</button>
                    <button
                        className='bg-primary text-white p-4 py-2 rounded-lg disabled:bg-near-white disabled:text-near-black'
                        disabled={false}
                    >
                        Confirmer
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
