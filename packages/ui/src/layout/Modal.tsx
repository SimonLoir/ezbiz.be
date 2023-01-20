import style from '../styles/Modal.module.scss';
export default function Modal({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div>{children}</div>
        </div>
    );
}
