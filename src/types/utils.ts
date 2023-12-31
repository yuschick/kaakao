import { ReactNode } from 'react';

export type WithChildren<P = object> = P & { children: ReactNode };
