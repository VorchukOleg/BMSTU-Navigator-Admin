import type { Draft } from '@reduxjs/toolkit';
import type { NoInfer } from 'react-redux';

import type { AsyncState } from '@/types/AsyncState.types';

export const handleAsyncActionFulfilled = <S extends AsyncState>(
    state: Draft<S>,
): NoInfer<S> | void | Draft<NoInfer<S>> => {
    state.status = 'fulfilled';
    state.error = undefined;
};
