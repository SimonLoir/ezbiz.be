import { useState } from 'react';
import Dialog from '../Dialog';
import Panel from '../Panel';
import { SubTitle } from '../Title';
import NewLine from './NewLine';

export default function InvoiceContentPanel() {
    const [showDialog, setShowDialog] = useState(false);
    return (
        <Panel>
            <SubTitle text='Contenu de la facture' />
            <table className='table-auto w-full text-left'>
                <thead>
                    <tr className='bg-near-white text-dark-gray whitespace-nowrap'>
                        <th className='p-2 rounded-l-lg'>Description</th>
                        <th className='p-2'>Prix unitaire HT</th>
                        <th className='p-2'>Taux TVA</th>
                        <th className='p-2 rounded-r-lg cursor-pointer'>⁞</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-subtle-gray text-dark-gray'>
                    <tr>
                        <td className='p-2 text-justify'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Perferendis, iure maiores ad pariatur quae
                            neque itaque inventore dolorem vitae et nostrum
                            quidem voluptatem voluptate ratione magnam dolores
                            nesciunt dolorum maxime.
                        </td>
                        <td className='p-2 text-right'>15.05€</td>
                        <td className='p-2 text-right'>21%</td>
                        <td className='p-2 font-semibold cursor-pointer'>⁞</td>
                    </tr>
                    <tr>
                        <td
                            colSpan={4}
                            className='text-center text-accent p-2 font-medium'
                        >
                            <button onClick={() => setShowDialog(true)}>
                                Ajouter une ligne
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {showDialog && <NewLine onHide={() => setShowDialog(false)} />}
        </Panel>
    );
}
