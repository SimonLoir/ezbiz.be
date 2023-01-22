import Link from 'next/link';

type MenuItemProps = {
    item: {
        name: string;
        icon: React.ReactNode;
        url: string;
    };
};
export default function MenuItem({ item }: MenuItemProps) {
    return (
        <Link href={item.url} key={item.url}>
            <div className='text-white p-4 text-medium hover:bg-accent transition-all group'>
                <div className='w-5 h-5 inline-grid align-middle mr-2 group-hover:text-white items-center justify-center text-secondary'>
                    {item.icon}
                </div>
                <span className='align-middle tracking-wide'>{item.name}</span>
            </div>
        </Link>
    );
}
