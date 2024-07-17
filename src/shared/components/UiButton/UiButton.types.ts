import {ButtonHTMLAttributes, ReactNode} from "react";

export interface UiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
