import UserRecord from 'ezbiz-sdk/records/UserRecord';
import { useState } from 'react';

type UserMenuProps = {
    user: UserRecord;
    logout: () => void;
};

export default function UserMenu({ user, logout }: UserMenuProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <span
                className='float-right text-dark-gray cursor-pointer select-none'
                onClick={() => setOpen((o) => !o)}
            >
                {user.name}
                <div className='h-10 w-10 inline-grid ml-4 bg-near-white align-middle justify-center items-center leading-none rounded-full font-bold'>
                    {getInitials(user.name)}
                </div>
            </span>
            {open && (
                <div className='bg-white px-8 z-95 fixed top-[65px] right-0 shadow-sm leading-none'>
                    <button className='block p-4 m-auto'>Mon compte</button>
                    <button className='block p-4 m-auto' onClick={logout}>
                        Me déconnecter
                    </button>
                </div>
            )}
        </>
    );
}

function getInitials(name: string) {
    return name
        .split(' ')
        .map((word) => word[0])
        .join('');
}
