import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import NewCustomerDialog from '../components/NewCustomerDialog';
import useCustomers from '../hooks/useCustomers';

const headers = ['Nom', 'Email', 'Téléphone', 'Adresse', 'N° TVA'];

export default function CustomersPageComponent() {
    const [showDialog, setShowDialog] = useState(false);
    const { customers, loading, error } = useCustomers();
    if (loading) return <div>Loading...</div>;
    if (customers)
        return (
            <>
                <table className='table-auto w-full text-left whitespace-nowrap border-spacing-y-2 border-separate'>
                    <thead>
                        <tr className='text-dark-gray'>
                            {headers.map((t) => (
                                <th key={t} className='p-4'>
                                    {t}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, i) => (
                            <tr key={i} className='bg-white'>
                                <td className='p-4 rounded-l-lg'>
                                    {customer.name}
                                </td>
                                <td className='p-4'>{customer.email}</td>
                                <td className='p-4'>{customer.phone}</td>
                                <td className='p-4'>{customer.address}</td>
                                <td className='p-4 rounded-r-lg'>
                                    {customer.vat_number}
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td
                                colSpan={headers.length}
                                className='text-center text-accent p-4 font-medium'
                            >
                                <button onClick={() => setShowDialog(true)}>
                                    Ajouter un client
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <button
                    className='fixed bottom-2 right-2 h-[50px] w-[50px] bg-primary text-white rounded-full text-3xl grid items-center justify-center shadow-xl z-90'
                    onClick={() => setShowDialog(true)}
                >
                    <BsPlus />
                </button>

                {showDialog && (
                    <NewCustomerDialog onHide={() => setShowDialog(false)} />
                )}
            </>
        );

    return <>{error?.message}</>;
}
