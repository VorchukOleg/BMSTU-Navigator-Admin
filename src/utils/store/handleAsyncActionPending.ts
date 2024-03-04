import type { Draft } from '@reduxjs/toolkit';
import type { NoInfer } from 'react-redux';

import type { AsyncState } from '@/types/AsyncState.types';

export const handleAsyncActionPending = <S extends AsyncState>(
    state: Draft<S>,
): NoInfer<S> | void | Draft<NoInfer<S>> => {
    state.error = undefined;
    state.status = 'pending';
};
