import { useRef } from 'react';
import LoginProvider from '../../auth/LoginProvider';
import { FaFileInvoice, FaHome, FaUserCircle } from 'react-icons/fa';
import EZBiz from 'ezbiz-sdk';
import MenuItem from './MenuItem';
import { IoMdSettings } from 'react-icons/io';

const menuItems = [
    { name: 'Accueil', url: '/', icon: <FaHome /> },
    { name: 'Factures', url: '/invoices', icon: <FaFileInvoice /> },
    { name: 'Clients', url: '/invoices', icon: <FaFileInvoice /> },
    { name: 'Produits', url: '/invoices', icon: <FaFileInvoice /> },
    { name: 'Déclarations TVA', url: '/invoices', icon: <FaFileInvoice /> },
    { name: 'Listing clients', url: '/invoices', icon: <FaFileInvoice /> },
];
const { auth } = EZBiz;
export default function AdminPanel({
    children,
}: {
    children: React.ReactNode;
}) {
    const ref = useRef<{ logout: () => void }>();
    return (
        <LoginProvider ref={ref}>
            <div className='fixed grid grid-cols-panel top-0 left-0 right-0 bottom-0 font-montserrat'>
                <nav className='grid bg-primary grid-rows-panel'>
                    <div className='text-white grid justify-center items-center font-semibold text-2xl tracking-wide'>
                        EZbiz
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            {menuItems.map((item, i) => (
                                <MenuItem key={i} item={item} />
                            ))}
                        </div>
                        <div>
                            <MenuItem
                                item={{
                                    name: 'Mon compte',
                                    url: '/',
                                    icon: <FaUserCircle />,
                                }}
                            />
                            <MenuItem
                                item={{
                                    name: 'Paramètres',
                                    url: '/',
                                    icon: <IoMdSettings />,
                                }}
                            />
                        </div>
                    </div>
                </nav>
                <div className='grid grid-rows-panel bg-near-white'>
                    <header className='leading-[65px] px-8 shadow-sm z-90  border-b border-subtle-gray bg-white text-near-black'>
                        <h1 className='inline text-xl font-semibold tracking-wide'>
                            Factures
                        </h1>
                        <span
                            className='float-right text-dark-gray cursor-pointer'
                            onClick={() => ref.current?.logout()}
                        >
                            {auth.user?.name}
                            <div className='h-10 w-10 inline-grid ml-4 bg-near-white align-middle justify-center items-center leading-none rounded-full font-bold'>
                                SL
                            </div>
                        </span>
                    </header>
                    <main className='p-8 z-85'>{children}</main>
                </div>
            </div>
        </LoginProvider>
    );
}
