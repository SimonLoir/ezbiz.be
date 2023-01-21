import InvoiceContentPanel from '../components/InvoiceContentPanel';
import Panel from '../components/Panel';
import Title, { SubTitle } from '../components/Title';

export default function NewInvoicePageComponent() {
    return (
        <div className='grid grid-cols-2 gap-8 h-full '>
            <div className='space-y-5'>
                <Title text='Contenu de la facture' />
                <Panel>
                    <SubTitle text='Informations générales' />
                    test
                </Panel>
                <InvoiceContentPanel />
            </div>
            <div>
                <Title text='Aperçu de la facture' />
            </div>
        </div>
    );
}
