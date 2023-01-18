import EZBiz from 'ezbiz-sdk';
const { auth, customers } = EZBiz;
export default function Web() {
    return (
        <div>
            <h1>test</h1>
            <button
                onClick={async () =>
                    console.log(await customers.getCustomers())
                }
            >
                test
            </button>
        </div>
    );
}
