export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid items-center justify-center fixed t-0 r-0 l-0 b-0 bg-near-white w-screen h-screen '>
            <div className='bg-white rounded-xl p-6 max-w-md w-screen shadow'>
                {children}
            </div>
        </div>
    );
}
