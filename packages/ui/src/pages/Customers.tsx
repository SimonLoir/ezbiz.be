import EZBiz from 'ezbiz-sdk';
import CustomerRecord from 'ezbiz-sdk/records/CustomerRecord';
import React, { useEffect, useState } from 'react';
const { customers: customers_service } = EZBiz;
export default React.memo(function CustomersPageComponent() {
    const [customers, setCustomers] = useState<CustomerRecord[]>([]);
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
                        {['Nom', 'Email', 'Téléphone', 'Adresse', 'N° TVA'].map(
                            (t) => (
                                <th key={t}>{t}</th>
                            )
                        )}
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
                </tbody>
            </table>
        </>
    );
});
