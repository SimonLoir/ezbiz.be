import Link from 'next/link';
import { BsPlus } from 'react-icons/bs';

export default function InvoicesPageComponent() {
    return (
        <>
            <Link href='/new-invoice'>
                <button className='fixed bottom-2 right-2 h-[50px] w-[50px] bg-primary text-white rounded-full text-3xl grid items-center justify-center shadow-xl z-90'>
                    <BsPlus />
                </button>
            </Link>
        </>
    );
}
