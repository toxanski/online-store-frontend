import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    size?: 'sm' | 'lg';
    color?: 'grey' | 'red' | 'ghost' | 'primary' | 'green';
    href?: string;
    children: ReactNode;
}