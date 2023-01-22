import Panel from '../components/Panel';
import { SubTitle } from '../components/Title';

export default function HomePage() {
    return (
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <Panel>
                <SubTitle text='Bienvenue sur EZBiz' />
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
}
