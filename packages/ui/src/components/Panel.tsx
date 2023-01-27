export default function Panel({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-white rounded-lg shadow-sm p-5 text-gray dark:bg-dark-lighter-gray dark:text-dark-text'>
            {children}
        </div>
    );
}
