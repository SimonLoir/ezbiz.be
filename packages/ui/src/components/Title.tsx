export default function Title({ text }: { text: string }) {
    return (
        <h2 className='text-xl text-dark-gray font-semibold mb-5'>{text}</h2>
    );
}

export function SubTitle({ text }: { text: string }) {
    return (
        <h2 className='text-lg text-dark-gray font-semibold mb-3'>{text}</h2>
    );
}
