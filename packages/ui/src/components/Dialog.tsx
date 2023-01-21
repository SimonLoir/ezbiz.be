export default function Dialog({
    children,
    onHide,
}: {
    children: React.ReactNode;
    onHide?: () => void;
}) {
    return (
        <>
            <div
                className='bg-near-black fixed top-0 left-0 right-0 bottom-0 opacity-25 z-98'
                onClick={onHide}
            ></div>
            <div className='bg-white rounded-xl p-6 max-w-md w-screen shadow fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-99'>
                {children}
            </div>
        </>
    );
}
