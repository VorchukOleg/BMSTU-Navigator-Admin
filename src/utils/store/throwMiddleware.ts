import type { Middleware } from '@reduxjs/toolkit';

import type { RejectedPayloadAction } from '@/types/RejectedPayloadAction.types';
import { consoleActionError } from '@/utils';

export const throwMiddleware: Middleware =
    () => (next) => (action: RejectedPayloadAction) => {
        consoleActionError(action);

        return next(action) as unknown;
    };
