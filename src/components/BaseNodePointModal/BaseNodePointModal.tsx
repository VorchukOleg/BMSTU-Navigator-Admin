
import { useLazyGetBaseNodeByUuidQuery } from '@/api/BaseNodes';
import { Dialog, DialogProps } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { useEffect } from 'react';


export interface ModalPointProps
    extends Omit<DialogProps, 'ref' | 'children'> {
    uuid: string;
}

export const BaseNodePointModal = ({ visible, uuid, ...props
}: ModalPointProps) => {

    const [requestPoint, {data, isFetching}] = useLazyGetBaseNodeByUuidQuery()

    useEffect(() => {
        if (visible) {
            requestPoint(uuid, true);
        }
    }, [visible, uuid, requestPoint]);

    const baseNodes = data?.baseNodes?.map(node =>
        <p>{node.title} ( {node.uuid} )</p>
    );

    const rooms = data?.rooms?.map(node =>
        <p>{node.title} ( {node.uuid} )</p>
    );

    return (
        <Dialog {...props} visible={visible} header="base_node_title" style={{ width: '50vw' }}> {
            isFetching && <ProgressSpinner/>
        }
        <div className="m-0">
            <p>uuid: {uuid}</p>
            <p>title: {data?.title}</p> 
            <p>coord: {data?.coordinates}</p>
            <div>
                <span>Связи с аудиториями</span>
                <ul>
                    { baseNodes }
                </ul>
            </div>

            <div>
                <span>Связи с базовыми точками</span>
                <ul>
                    { rooms }
                </ul>
            </div>
        </div>
      </Dialog>
    );
};
