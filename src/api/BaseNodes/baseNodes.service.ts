import { createApi } from '@reduxjs/toolkit/query/react';
import { baseNodesRoutes } from './baseNodes.routes';
import { fetchBaseQueryInstance } from '@/api/api.config';

export interface RoomDto {
    uuid: string;
    title: string;
    displayTitle: string;
}

export interface BaseNodeDto {
    uuid: string;
    title: string;
    coordinates: string;
    floor: number;
    rooms: RoomDto[];
    baseNodes: Omit<BaseNodeDto, 'baseNodes' | 'rooms'>[];
}

export const baseNodesApi = createApi({
    reducerPath: baseNodesRoutes.REDUCER,
    baseQuery: fetchBaseQueryInstance(),
    endpoints: (builder) => ({
        getAllBaseNodes: builder.query<Omit<BaseNodeDto, 'baseNodes' | 'rooms'>[] | undefined, void>({
            // TODO: добавить параметры запроса для фильтрации
            query: () => baseNodesRoutes.baseNodes()
        }),
        getBaseNodeByUuid: builder.query<BaseNodeDto | undefined, string>({
            query: (uuid) => baseNodesRoutes.baseNode(uuid)
        }),
    }),
});

export const {
    useGetAllBaseNodesQuery,
    useLazyGetAllBaseNodesQuery,
    useGetBaseNodeByUuidQuery,
    useLazyGetBaseNodeByUuidQuery,
} = baseNodesApi;
