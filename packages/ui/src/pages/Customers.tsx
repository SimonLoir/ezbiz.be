import EZBiz from 'ezbiz-sdk';
import CustomerRecord from 'ezbiz-sdk/records/CustomerRecord';
import React, { useEffect, useState } from 'react';
import { BsPlus } from 'react-icons/bs';
import NewCustomerDialog from '../components/NewCustomerDialog';

const { customers: customers_service } = EZBiz;
const headers = ['Nom', 'Email', 'Téléphone', 'Adresse', 'N° TVA'];

export default function CustomersPageComponent() {
    const [customers, setCustomers] = useState<CustomerRecord[]>([]);
    const [showDialog, setShowDialog] = useState(false);
    useEffect(() => {
        console.log('CustomersPageComponent');
        customers_service
            .getAll()
            .then((customers) => {
                console.log('customers', customers);
                setCustomers(customers);
            })
            .catch((err) => console.error(err));
    }, []);
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
}
