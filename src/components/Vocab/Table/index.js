import React from 'react'
import IntlMessages from '../../../util/IntlMessages';
import { Space, Button, Tag } from 'antd';
import { WrapperTable } from '../../User/Table/Table.style';

const dataSource = [
    {
        key: 1,
        name: 'Operate',
        type: '(v)',
        mean: 'vận hành, hoạt động',
    },
    {
        key: 2,
        name: 'Opportunity',
        type: '(n)',
        mean: 'cơ hội',
    },
    {
        key: 3,
        name: 'Beneficial',
        type: '(adj)',
        mean: 'có lợi',
    },
    {
        key: 4,
        name: 'Publish',
        type: '(v)',
        mean: 'xuất bản',
    },
    {
        key: 5,
        name: 'Charge',
        type: '(n/v)',
        mean: 'Phí/tính phí',
    },
    {
        key: 6,
        name: 'Test',
        type: '(n)',
        mean: 'Test',
    },
    {
        key: 7,
        name: 'Test',
        type: '(n)',
        mean: 'Test',
    },
];

const columns = [
    {
        title: <IntlMessages id="table.column.nameVocab" />,
        dataIndex: "name",
        key: "name",
    },
    {
        title: <IntlMessages id="table.column.typeVocab" />,
        dataIndex: "type",
        key: "type",
    },
    {
        title: <IntlMessages id="table.column.meanVocab" />,
        dataIndex: "mean",
        key: "mean",
    },
    {
        title: <IntlMessages id="table.column.statusVocab" />,
        dataIndex: "key",
        key: "key",
        render: (key) => (
            <Space>
                <Button style={{ marginBottom: 0 }}>Edit</Button>
                <Button type="danger" style={{ marginBottom: 0 }}>
                    Delete
                </Button>
            </Space>
        )
    },
];

function VocabTable() {
    return (
        <WrapperTable
            style={{ width: "100%" }}
            dataSource={dataSource}
            columns={columns}
            rowKey={'_id'}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
          onChange: (page, limit) => {
            console.log(page, limit);
          },
        }}
        />
    )
}

export default VocabTable