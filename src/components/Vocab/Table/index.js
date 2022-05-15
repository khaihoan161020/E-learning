import React, { useEffect } from 'react'
import IntlMessages from '../../../util/IntlMessages';
import { Space, Button, Tag, Table } from 'antd';
import { WrapperTable } from '../../User/Table/Table.style';
import { useDispatch, useSelector } from 'react-redux';
import vocabActions from '../../../appRedux/Vocab/action';


function VocabTable({ params, setParams }) {

    const dispatch = useDispatch();
    const data = useSelector(state => state.vocab.data)
    const success = useSelector((state) => state.vocab.success);

    // const handleclick = (data) => {
    //     console.log(data);
        
    // }
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
            dataIndex: "means",
            key: "means",
        },
        {
            title: <IntlMessages id="table.column.statusVocab" />,
            key: "action",
            width: 200,
            render: (data) => (
                <Space>
                    <Button
                        style={{ marginBottom: 0 }}
                        onClick={() => dispatch(vocabActions.toggleModal(data))}
                    >
                        Edit
                    </Button>

                    <Button 
                        type="danger"
                        style={{ marginBottom: 0 }}
                        onClick={() => dispatch(vocabActions.deleteVocabbyID(data.id))}
                    >
                        Delete
                    </Button>
                </Space>
            )
        },
    ];

    useEffect(() => {
        if (success)
            dispatch(vocabActions.fetchVocab(params))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);
    
    useEffect(() => {
        dispatch(vocabActions.fetchVocab(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, params]);

    return (
        <WrapperTable
            style={{ width: "100%" }}
            dataSource={data.rows}
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