import type { MutableRefObject, ReactNode } from 'react';
import { createContext, useContext } from 'react';
import type { ToastMessage } from 'primereact/toast';
import { Toast } from 'primereact/toast';

interface ToastProviderProps {
    children: ReactNode;
}

const ToastContext = createContext({} as MutableRefObject<Toast | null>);
export const useToast = () => useContext(ToastContext);

class ToastRef {
    private toastRef: MutableRefObject<Toast | null> = {
        current: null,
    };

    public setToastRef = (ref: Toast | null) => {
        this.toastRef.current = ref;
    };

    public show = (message: ToastMessage | ToastMessage[]) =>
        this.toastRef.current?.show(message);

    public getRef = () => this.toastRef;
}

export const toastRef = new ToastRef();

export const ToastProvider = ({ children }: ToastProviderProps) => (
    <ToastContext.Provider value={toastRef.getRef()}>
        <Toast ref={toastRef.getRef()} />
        {children}
    </ToastContext.Provider>
);
