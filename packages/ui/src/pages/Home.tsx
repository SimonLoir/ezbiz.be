import Panel from '../components/Panel';
import { SubTitle } from '../components/Title';
import useEnterprise from '../hooks/useEnterprise';
export default function HomePage() {
    const { enterprise, error, loading } = useEnterprise();
    if (loading) return <div>Loading...</div>;
    if (enterprise)
        return (
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <Panel>
                    <SubTitle text='Bienvenue sur EZBiz' />
                    <p>
                        Entreprise : {enterprise.name} ({enterprise.vat_number})
                    </p>
                    <p>Type : {enterprise.type}</p>
                </Panel>
                <Panel>
                    <SubTitle text='Bienvenue sur EZBiz' />
                </Panel>
                <Panel>
                    <SubTitle text='Bienvenue sur EZBiz' />
                </Panel>
                <Panel>
                    <SubTitle text='Bienvenue sur EZBiz' />
                </Panel>
            </div>
        );
    return <div>Erreur: {error?.message}</div>;
}
