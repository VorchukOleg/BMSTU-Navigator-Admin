import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseNodesApi } from '@/api/BaseNodes';
import { throwMiddleware } from '@/utils';

export const makeStore = () =>
    configureStore({
        reducer: {
            [baseNodesApi.reducerPath]: baseNodesApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(baseNodesApi.middleware)
                .concat(throwMiddleware),
    });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>;

export interface AsyncThunkConfig {
    /** return type for `thunkApi.getState` */
    state: AppState;
    /** type for `thunkApi.dispatch` */
    dispatch: AppDispatch;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

setupListeners(store.dispatch);

export default store;
