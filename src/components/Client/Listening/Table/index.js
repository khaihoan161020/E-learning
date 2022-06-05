import React, { useEffect } from 'react'
import IntlMessages from '../../../../util/IntlMessages';
import { Space, Button, Tag } from 'antd';
import { WrapperTable } from '../../../User/Table/Table.style';
import { useDispatch, useSelector } from 'react-redux';
import { EyeOutlined } from '@ant-design/icons';
import listeningActions from '../../../../appRedux/Listening/actions';


function ReadTable({ params, setParams }) {

    const dispatch = useDispatch();
    const data = useSelector(state => state.listening.dataQuizUser)
    // console.log(data);
    const success = useSelector((state) => state.listening.success);

    // const handleclick = (data) => {
    //     console.log(data.data);
    // }
    useEffect(() => {
        if (success)
            dispatch(listeningActions.getQuizDataRead(params))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);
    
    useEffect(() => {
        dispatch(listeningActions.getQuizDataRead(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, params]);
    const columns = [
        {
            title: <IntlMessages id="table.column.questionRead" />,
            dataIndex: "questionId",
            key: "questionId",
            render: (data) => {
                return <p>{data.question}</p>
            }
        },
        {
            title: <IntlMessages id="table.column.yourAnswer" />,
            key: "correctPick",
            render: (data) => {
                const answerOfUser = data?.questionId?.data.find(ans => ans._id === data.answerId)
                if (answerOfUser)
                    return <p>{answerOfUser.answer}</p>
                else return <p>Don't pick Answer</p>
            }
        },
        {
            title: <IntlMessages id="table.column.status" />,
            dataIndex: "correctPick",
            key: "correctPick",
            width: 100,
            render: (correct) => {
                if(correct) return  <Tag color="#87d068">Correct</Tag>
                if(correct === false) return  <Tag color="#f50">Incorrect</Tag>
                else return  <Tag >UnPick</Tag>
            }
        },
       
        {
            title: <IntlMessages id="table.column.actionRead" />,
            key: "action",
            width: 100,
            render: (data) => (
                <Space>
                    <Button
                        style={{ marginBottom: 0, color: '#5468ff' }}
                        shape="circle"
                        icon={<EyeOutlined />}
                        onClick={() => dispatch(listeningActions.toggleModalPreview(data))}
                        // onClick={() => handleclick(data)}
                    >
                    </Button>

                   
                </Space>
            )
        },
    ];


    return (
        <WrapperTable
            style={{ width: "100%" }}
            dataSource={data.rows}
            columns={columns}
            rowKey={'_id'}
            pagination={{
                total: data.count,
                defaultPageSize: 12,
                onChange: (page, limit) => {
                    setParams({...params, page: page})
                },
            }}
        />
    )
}

export default ReadTable