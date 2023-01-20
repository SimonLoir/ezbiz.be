import EZBiz from 'ezbiz-sdk';
const { auth, customers } = EZBiz;
export default function Web() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-slate-200 underline'>
                test
            </h1>
            <button
                onClick={async () => {
                    const c = await customers.getAll();
                    console.log(c);
                }}
            >
                hello there
            </button>
        </div>
    );
}
