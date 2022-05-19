import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TextProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 'lg' | 'md' | 'sm';
    children: ReactNode;
}