import {ButtonHTMLAttributes, ReactNode} from "react";

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    href?: string;
    disabled?: boolean;
    loading?: boolean;
    size?: 'sm' | 'md' | 'lg';
}


// {
//     href?: string;
//     disabled?: boolean;
//     type?: 'button' | 'submit' | 'reset';
//     loading?: boolean;
//     size?: 'sm' | 'md' | 'lg';
//     block?: boolean;
//     theme?: 'danger' | 'primary' | 'secondary';
// }