import {ReactNode} from "react";

export interface TitleTagProps {
    tagName: 'h1' | 'h2' | 'h3';
    children: ReactNode
}