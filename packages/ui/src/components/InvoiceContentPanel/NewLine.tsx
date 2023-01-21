import { useState } from 'react';
import Dialog from '../Dialog';
import Title, { SubTitle } from '../Title';

type NewLineProps = {
    onHide: () => void;
    data?: {
        description: string;
    };
};
export default function NewLine({ onHide, data }: NewLineProps) {
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState(21);
    return (
        <Dialog>
            <Title text='Ajouter une ligne' />
            <div className='space-y-3'>
                <div>
                    <SubTitle text='Description' />
                    <textarea
                        className='w-full rounded-lg border border-subtle-gray p-2'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <SubTitle text='Détails' />
                    <div className='space-x-4 mb-4'>
                        <input
                            type='number'
                            className='rounded-lg border border-subtle-gray p-1 w-[70px]'
                            value={1}
                            min={1}
                        />
                        <span>au prix de </span>
                        <span>
                            <input
                                type='number'
                                className='rounded-lg border border-subtle-gray p-1 w-[70px] mr-2'
                                value={0}
                                min={0}
                            />
                            €
                        </span>
                    </div>
                    <div className='space-x-4'>
                        <span>Au taux de </span>
                        {[21, 12, 6, 0].map((value) => {
                            const classes: string[] = [
                                'cursor-pointer',
                                'transition-all',
                            ];
                            if (value === rate) {
                                classes.push('text-primary');
                                classes.push('font-semibold');
                                classes.push('border-b-2');
                            }
                            return (
                                <span
                                    className={classes.join(' ')}
                                    onClick={() => setRate(value)}
                                >
                                    {value}%
                                </span>
                            );
                        })}
                    </div>
                </div>
                <div className='flex justify-end space-x-4'>
                    <button onClick={() => onHide()}>Annuler</button>
                    <button
                        className='bg-primary text-white p-4 py-2 rounded-lg disabled:bg-near-white disabled:text-near-black'
                        disabled={description.trim() == ''}
                    >
                        Confirmer
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
