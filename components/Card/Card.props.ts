import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    color?: 'blue' | 'white';
}