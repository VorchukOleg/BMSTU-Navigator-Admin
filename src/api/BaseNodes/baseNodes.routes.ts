class BaseNodeRoutes {
    public REDUCER = 'base_nodes' as const;

    baseNodes = () =>  '/base_nodes' as const;

    baseNode = (uuid: string) => `/base_nodes/${uuid}` as const;
}

export const baseNodesRoutes = new BaseNodeRoutes();
