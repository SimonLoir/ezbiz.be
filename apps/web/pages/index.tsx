import EZBiz from 'ezbiz-sdk';
const { auth, customers, info } = EZBiz;
export default function Web() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-slate-200 underline'>
                test
            </h1>
            <button onClick={async () => console.log(await info())}>
                test
            </button>
        </div>
    );
}
