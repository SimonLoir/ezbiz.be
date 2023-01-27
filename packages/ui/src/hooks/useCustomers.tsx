import EZBiz from 'ezbiz-sdk';
import DuplicateError from 'ezbiz-sdk/exceptions/DuplicateError';
import CustomerRecord from 'ezbiz-sdk/records/CustomerRecord';
import { useEffect, useState } from 'react';

const { customers: customers_service } = EZBiz;
export default function useCustomers({
    lastUpdated,
}: {
    lastUpdated?: number;
}) {
    const [customers, setCustomers] = useState<CustomerRecord[] | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        setLoading(true);
        customers_service
            .getAll()
            .then((c) => {
                setCustomers(c);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                if (err instanceof DuplicateError && customers != null) {
                    setError(null);
                    setLoading(false);
                } else {
                    setError(err);
                    setLoading(false);
                }
            });
    }, [lastUpdated]);
    return { customers, loading, error };
}
