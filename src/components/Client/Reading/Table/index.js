import React, { useEffect } from 'react'
import IntlMessages from '../../../../util/IntlMessages';
import { Space, Button, Tag, Table } from 'antd';
import { WrapperTable } from '../../../User/Table/Table.style';
import { useDispatch, useSelector } from 'react-redux';
import readActions from '../../../../appRedux/Reading/action';


function ReadTable({ params, setParams }) {

    const dispatch = useDispatch();
    const data = useSelector(state => state.read.data)
    // console.log(data);
    const success = useSelector((state) => state.read.success);

    // const handleclick = (data) => {
    //     console.log(data.data);
    // }

    const columns = [
        {
            title: <IntlMessages id="table.column.questionRead" />,
            dataIndex: "question",
            key: "question",
        },
        {
            title: <IntlMessages id="table.column.answerRead" />,
            dataIndex: "data",
            key: "data",
            render: (index) => {
                return index.map((item, index) => <div key={index}>{item.answer}</div>)
            }
        },
        {
            title: <IntlMessages id="table.column.actionRead" />,
            key: "action",
            width: 200,
            render: (data) => (
                <Space>
                    <Button
                        style={{ marginBottom: 0 }}
                        onClick={() => dispatch(readActions.toggleModal(data))}
                        // onClick={() => handleclick(data)}
                    >
                        Edit
                    </Button>

                    <Button 
                        type="danger"
                        style={{ marginBottom: 0 }}
                        onClick={() => dispatch(readActions.deleteReadbyID(data.id))}
                    >
                        Delete
                    </Button>
                </Space>
            )
        },
    ];

    // useEffect(() => {
    //     if (success)
    //         dispatch(readActions.fetchRead(params))
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [success]);
    
    // useEffect(() => {
    //     dispatch(readActions.fetchRead(params));
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [dispatch, params]);

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