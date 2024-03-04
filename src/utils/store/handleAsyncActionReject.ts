import type { AnyAction, Draft } from '@reduxjs/toolkit';
import type { NoInfer } from 'react-redux';

import type { AsyncState } from '@/types/AsyncState.types';

export const handleAsyncActionReject = <S extends AsyncState>(
    state: Draft<S>,
    action: AnyAction,
): NoInfer<S> | void | Draft<NoInfer<S>> => {
    state.status = 'rejected';
    const error = action.error as { message?: string };

    state.error = error.message;

    console.error(`at ${action.type ?? ''}`, action.error);
};
