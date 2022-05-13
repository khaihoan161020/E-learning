import React, { useEffect } from 'react'
import IntlMessages from '../../../util/IntlMessages';
import { Space, Button, Tag, Table } from 'antd';
import { WrapperTable } from '../../User/Table/Table.style';
import { useDispatch, useSelector } from 'react-redux';
import vocabActions from '../../../appRedux/Vocab/action';


function VocabTable({ params, setParams }) {
    const columns = [
        {
            title: <IntlMessages id="table.column.nameVocab" />,
            dataIndex: "name",
            key: "name",
        },
        // Table.EXPAND_COLUMN,
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
            dataIndex: "_id",
            key: "_id",
            width: 200,
            render: (index) => (
                <Space>
                    <Button style={{ marginBottom: 0 }}>Edit</Button>
                    <Button type="danger" style={{ marginBottom: 0 }}>
                        Delete
                    </Button>
                </Space>
            )
        },
    ];

    const dispatch = useDispatch();
    const data = useSelector(state => state.vocab.data)
    
    useEffect(() => {
        dispatch(vocabActions.fetchVocab(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, params]);

    return (
        <WrapperTable
            style={{ width: "100%" }}
            dataSource={data.rows}
            // expandable={{
            //     expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
            // }}
            columns={columns}
            rowKey={'_id'}
            pagination={{
                total: data.count,
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "50"],
                onChange: (page, limit) => {
                    setParams({...params, page: page, limit: limit})
                },
            }}
        />
    )
}

export default VocabTable