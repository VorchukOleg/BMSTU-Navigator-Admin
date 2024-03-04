class AppRoutes {
    root = () => '/' as const;

    baseNodes = (uuid?: string) => `/base_nodes/${uuid ?? ''}` as const;

    rooms = (uuid?: string) => `/rooms/${uuid ?? ''}` as const;
}

export const appRoutes = new AppRoutes();
