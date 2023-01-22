type InputProps = {
    label: string;
    type: string;
    id: string;
    placeholder: string;
    onChange?: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    value?: string;
};
export default function Input({
    label,
    id,
    placeholder,
    type,
    onChange,
    value,
}: InputProps) {
    if (type != 'textarea')
        return (
            <div>
                <label htmlFor={id} className='block mb-2'>
                    {label}
                </label>
                <input
                    type={type}
                    autoComplete={id}
                    id={id}
                    className='w-full bg-near-white border border-subtle-gray rounded-lg mt-0 p-2.5'
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </div>
        );
    return (
        <div>
            <label htmlFor={id} className='block mb-2'>
                {label}
            </label>
            <textarea
                id={id}
                className='w-full bg-near-white border border-subtle-gray rounded-lg mt-0 p-2.5'
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
