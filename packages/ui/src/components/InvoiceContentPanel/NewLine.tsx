import Dialog from '../Dialog';
import Title, { SubTitle } from '../Title';

type NewLineProps = {
    onHide: () => void;
};
export default function NewLine({ onHide }: NewLineProps) {
    return (
        <Dialog>
            <Title text='Ajouter une ligne' />
            <div className='space-y-3'>
                <div>
                    <SubTitle text='Description' />
                    <textarea
                        className='w-full rounded-lg border border-subtle-gray p-2'
                        rows={5}
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
                        <button>21%</button>
                        <button>12%</button>
                        <button>6%</button>
                    </div>
                </div>
                <div className='flex justify-end space-x-4'>
                    <button onClick={() => onHide()}>Annuler</button>
                    <button className='bg-primary text-white p-4 py-2 rounded-lg'>
                        Confirmer
                    </button>
                </div>
            </div>
        </Dialog>
    );
}
