import CustomerSelector from '../components/CustomerSelector';
import InvoiceContentPanel from '../components/InvoiceContentPanel';
import InvoiceNumber from '../components/InvoiceNumber';
import Panel from '../components/Panel';
import StructuredCommunication from '../components/StructuredCommunication';
import Title, { SubTitle } from '../components/Title';

export default function NewInvoicePageComponent() {
    return (
        <div className='grid grid-cols-2 gap-8 h-full '>
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
                            : <input type='date' id='submit-date' />
                        </div>
                        <div>
                            <label htmlFor='days'>Délais de payement :</label>{' '}
                            <input
                                type='number'
                                id='days'
                                min={1}
                                value={14}
                                className='w-9'
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
