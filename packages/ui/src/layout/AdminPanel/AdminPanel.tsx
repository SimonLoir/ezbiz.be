import {
    FaFileInvoice,
    FaHome,
    FaUserCircle,
    FaShoppingBasket,
    FaUserFriends,
} from 'react-icons/fa';
import MenuItem from './MenuItem';
import { IoMdSettings } from 'react-icons/io';
import {
    BsFileSpreadsheet,
    BsFillMoonFill,
    BsFillSunFill,
} from 'react-icons/bs';
import { RiFileUserLine } from 'react-icons/ri';
import UserRecord from 'ezbiz-sdk/records/UserRecord';
import UserMenu from './UserMenu';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg';

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
    pageTitle = 'EZbiz',
}: {
    children: React.ReactNode;
    user: UserRecord;
    logout: () => void;
    pageTitle?: string;
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    return (
        <div
            className={`fixed flex flex-row top-0 left-0 right-0 bottom-0 font-montserrat select-none ${
                darkMode ? 'dark' : 'white'
            }`}
        >
            <nav
                className={`${
                    isMenuOpen ? 'flex' : 'hidden'
                } bg-primary dark:bg-dark-lighter-gray flex-col basis-64 grow-0 shrink-0 lg:flex select-none`}
            >
                <div className='text-white grid justify-center items-center font-semibold text-2xl tracking-wide basis-[65px] grow-0 shrink-0'>
                    EZbiz
                </div>
                <div className='flex flex-1 flex-col justify-between'>
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
            <div className='flex flex-col bg-near-white dark:bg-dark-gray flex-1 max-w-full lg:max-w-main'>
                <header className='leading-[65px] px-8 shadow-sm z-90  border-b border-subtle-gray dark:border-dark-lighter-gray bg-white dark:bg-dark-gray  text-near-black dark:text-white select-none'>
                    <span
                        className='inline align-middle cursor-pointer lg:hidden'
                        onClick={() => setIsMenuOpen((o) => !o)}
                    >
                        <CgMenu className='inline text-2xl mr-4' />
                    </span>
                    <h1
                        className={`${
                            isMenuOpen ? 'hidden' : 'inline'
                        } text-xl font-semibold tracking-wide align-middle sm:inline`}
                    >
                        {pageTitle}
                    </h1>
                    <UserMenu user={user} logout={logout} />
                    <div
                        className='inline-block mr-4 float-right leading-[65px] h-[65px] cursor-pointer'
                        onClick={() => setDarkMode((d) => !d)}
                    >
                        {darkMode ? (
                            <BsFillSunFill className='inline text-white' />
                        ) : (
                            <BsFillMoonFill className='inline text-gray' />
                        )}
                    </div>
                </header>
                <main
                    className={`p-8 z-85 overflow-auto grow flex-1 ${
                        isMenuOpen ? 'hidden' : 'block'
                    } sm:block`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}
