import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type HTMLElementProps = Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    'ref' | 'children'
>;
