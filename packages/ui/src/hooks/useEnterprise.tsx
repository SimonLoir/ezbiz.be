import EZBiz from 'ezbiz-sdk';
import DuplicateError from 'ezbiz-sdk/exceptions/DuplicateError';
import EnterpriseRecord from 'ezbiz-sdk/records/EnterpriseRecord';
import { useEffect, useState } from 'react';

const { auth } = EZBiz;
export default function useEnterprise() {
    const [enterprise, setEnterprise] = useState<EnterpriseRecord | null>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        setLoading(true);
        if (!auth.user) {
            setLoading(false);
            setError(new Error('User not logged in'));
        } else {
            auth.user
                .enterprise()
                .then((e) => {
                    setEnterprise(e);
                    setError(null);
                    setLoading(false);
                })
                .catch((err) => {
                    if (err instanceof DuplicateError && enterprise != null) {
                        setError(null);
                        setLoading(false);
                    } else {
                        setError(err);
                        setLoading(false);
                    }
                });
        }
    }, []);
    return { enterprise, loading, error };
}
