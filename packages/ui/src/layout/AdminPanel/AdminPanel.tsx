import {
    FaFileInvoice,
    FaHome,
    FaUserCircle,
    FaShoppingBasket,
    FaUserFriends,
} from 'react-icons/fa';
import MenuItem from './MenuItem';
import { IoMdSettings } from 'react-icons/io';
import { BsFileSpreadsheet } from 'react-icons/bs';
import { RiFileUserLine } from 'react-icons/ri';
import UserRecord from 'ezbiz-sdk/records/UserRecord';
import UserMenu from './UserMenu';

const menuItems = [
    { name: 'Accueil', url: '/', icon: <FaHome /> },
    { name: 'Factures', url: '/invoices', icon: <FaFileInvoice /> },
    { name: 'Clients', url: '/customers', icon: <FaUserFriends /> },
    { name: 'Produits', url: '/invoices', icon: <FaShoppingBasket /> },
    { name: 'Déclarations TVA', url: '/invoices', icon: <BsFileSpreadsheet /> },
    { name: 'Listing clients', url: '/invoices', icon: <RiFileUserLine /> },
];

export default function AdminPanel({
    children,
    user,
    logout,
}: {
    children: React.ReactNode;
    user: UserRecord;
    logout: () => void;
}) {
    return (
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
                    <UserMenu user={user} logout={logout} />
                </header>
                <main className='p-8 z-85'>{children}</main>
            </div>
        </div>
    );
}
