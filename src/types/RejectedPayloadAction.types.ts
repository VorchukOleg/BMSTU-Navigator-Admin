import type { PayloadAction, SerializedError } from '@reduxjs/toolkit';

export type RejectedPayloadAction = PayloadAction<
    unknown,
    string,
    {
        arg: unknown;
        requestId: string;
        requestStatus: 'rejected';
        aborted: boolean;
        condition: boolean;
    },
    SerializedError | undefined
>;
