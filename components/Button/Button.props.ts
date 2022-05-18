import {ReactNode} from "react";

export interface ButtonProps {
    appearance: 'primary' | 'ghost';
    children: ReactNode;
}