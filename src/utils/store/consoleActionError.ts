import { isRejectedWithValue } from '@reduxjs/toolkit';

import type { RejectedPayloadAction } from '@/types/RejectedPayloadAction.types';
import { toastRef } from '@/contexts/ToastProvider';

export const consoleActionError = (action: RejectedPayloadAction) => {
    if (isRejectedWithValue(action)) {
        if (
            action.meta.arg &&
            typeof action.meta.arg === 'object' &&
            'endpointName' in action.meta.arg &&
            typeof action.meta.arg.endpointName === 'string'
        ) {
            const payload = action.payload as
                | {
                      status?: string;
                      data?: { error?: string; message?: string };
                      message?: string;
                  }
                | undefined;

            console.error(
                `Error at ${action.meta.arg.endpointName}: ${
                    payload?.status ?? ''
                } ${payload?.data?.error ?? ''} ${
                    payload?.data?.message ?? ''
                }`,
                action,

                toastRef.show({
                    severity: 'error',
                    summary: `${payload?.status ?? ''} ${
                        payload?.data?.error ?? ''
                    }`,
                    detail: (payload?.data?.message || payload?.message) ?? '',
                    life: 3000,
                }),
            );
        } else {
            console.error(
                `Error at ${action.type}: ${action.error.message ?? ''}`,
                action,
            );
        }
    }
};
