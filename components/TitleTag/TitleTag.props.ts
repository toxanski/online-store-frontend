import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TitleTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tagName?: 'h1' | 'h2' | 'h3';
    children: ReactNode
}