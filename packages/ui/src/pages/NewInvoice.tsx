import CustomerSelector from '../components/CustomerSelector';
import InvoiceContentPanel from '../components/InvoiceContentPanel';
import InvoiceNumber from '../components/InvoiceNumber';
import Panel from '../components/Panel';
import StructuredCommunication from '../components/StructuredCommunication';
import Title, { SubTitle } from '../components/Title';

export default function NewInvoicePageComponent() {
    return (
        <div className='lg:grid grid-cols-2 gap-8 h-full space-y-5 lg:space-y-0'>
            <div className='space-y-5'>
                <Title text='Contenu de la facture' />
                <Panel>
                    <SubTitle text='Informations générales' />
                    <div className='space-y-4'>
                        <CustomerSelector />
                        <div>
                            <label htmlFor='submit-date'>
                                Date d&apos;émission
                            </label>{' '}
                            :{' '}
                            <input
                                type='date'
                                id='submit-date'
                                className='dark:bg-transparent dark:text-white'
                            />
                        </div>
                        <div>
                            <label htmlFor='days'>Délais de payement :</label>{' '}
                            <input
                                type='number'
                                id='days'
                                min={1}
                                value={14}
                                className='w-9 dark:bg-transparent dark:text-white'
                            />{' '}
                            jours
                        </div>
                        <div>
                            <InvoiceNumber />
                        </div>
                        <div>
                            <StructuredCommunication />
                        </div>
                    </div>
                </Panel>
                <InvoiceContentPanel />
            </div>
            <div>
                <Title text='Aperçu de la facture' />
            </div>
        </div>
    );
}
