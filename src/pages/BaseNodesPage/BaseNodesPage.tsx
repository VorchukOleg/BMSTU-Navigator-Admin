
import { useGetAllBaseNodesQuery } from "@/api/BaseNodes";
import { BaseNodePointModal } from "@/components/BaseNodePointModal/BaseNodePointModal";
import { Column } from "primereact/column";
import { DataTable, DataTableSelectEvent } from "primereact/datatable";
import { ProgressSpinner } from "primereact/progressspinner";
import { useState } from "react";

export const BaseNodesPage = () => {
  const {data, isFetching} = useGetAllBaseNodesQuery();
  const [visible, setVisible] = useState(false);
  const [uuid, setUuid] = useState('');

  if (isFetching) { return <ProgressSpinner/> }

  const onRowSelect = (event: DataTableSelectEvent) => {
    setUuid(event.data.uuid);
    setVisible(true);
  };

  return (
    <>
      <BaseNodePointModal visible={visible} uuid={uuid} onHide={() => setVisible(false)}/>
      
      <h1>Base Nodes Page</h1>
      <DataTable onRowSelect={onRowSelect} value={data ?? []} selectionMode="single" tableStyle={{ minWidth: '50rem' }}>
          <Column field="uuid" header="uuid"></Column>
          <Column field="title" header="title"></Column>
          <Column field="coordinates" header="coordinates"></Column>
          <Column field="floor" header="floor"></Column>
      </DataTable>
    
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>

  );
}

export default BaseNodesPage;
