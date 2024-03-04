export type FetchStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export interface AsyncState {
    status: FetchStatus;
    error?: unknown;
}
