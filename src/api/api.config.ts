import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { FetchBaseQueryArgs } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { BACKEND_URI } from '@/config';


export const fetchBaseQueryInstance = (args?: Partial<FetchBaseQueryArgs>) =>
    fetchBaseQuery({
        baseUrl: BACKEND_URI,
        credentials: 'include',
        ...args,
    });
