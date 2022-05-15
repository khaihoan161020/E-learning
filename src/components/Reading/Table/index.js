import React, { useEffect } from 'react'
import IntlMessages from '../../../util/IntlMessages';
import { Space, Button, Tag, Table } from 'antd';
import { WrapperTable } from '../../User/Table/Table.style';
import { useDispatch, useSelector } from 'react-redux';
import readActions from '../../../appRedux/Reading/action';


function ReadTable({ params, setParams }) {

    const dispatch = useDispatch();
    const data = useSelector(state => state.read.data)
    console.log(data);
    // const success = useSelector((state) => state.vocab.success);

    // const handleclick = (data) => {
    //     console.log(data);
        
    // }
    const columns = [
        {
            title: <IntlMessages id="table.column.questionRead" />,
            dataIndex: "question",
            key: "question",
        },
        {
            title: <IntlMessages id="table.column.answerRead" />,
            dataIndex: "answer",
            key: "answer",
            render: (data) => (
                <Space>
                    
                </Space>
            )
        },
        {
            title: <IntlMessages id="table.column.actionRead" />,
            key: "action",
            width: 200,
            render: (data) => (
                <Space>
                    <Button
                        style={{ marginBottom: 0 }}
                        // onClick={() => dispatch(vocabActions.toggleModal(data))}
                    >
                        Edit
                    </Button>

                    <Button 
                        type="danger"
                        style={{ marginBottom: 0 }}
                        // onClick={() => dispatch(vocabActions.deleteVocabbyID(data.id))}
                    >
                        Delete
                    </Button>
                </Space>
            )
        },
    ];

    // useEffect(() => {
    //     if (success)
    //         dispatch(vocabActions.fetchVocab(params))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [success]);
    
    useEffect(() => {
        dispatch(readActions.fetchRead(params));
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

export default ReadTable