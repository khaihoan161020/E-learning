import React, { useEffect } from 'react'
import IntlMessages from '../../../../util/IntlMessages';
import { Space, Button, Tag, Table } from 'antd';
import { WrapperTable } from './Table.style';
import { useDispatch, useSelector } from 'react-redux';
import { AliwangwangOutlined } from "@ant-design/icons";

const  TableListVocab = React.memo(() => {

    const data = useSelector(state => state.vocab.quizQuestion)

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
            render: (means) => {
                const correctMean = means.find(mean => mean.isCorrect)
                return <span>{correctMean.name}</span>
            }
        },
        {
            title: <IntlMessages id="table.column.action" />,
            key: "action",
            width: 70,
            render: (data) => (
                <Space>

                    <Button 
                        type="primary"
                        style={{ marginBottom: 0 }}
                        icon={<AliwangwangOutlined />}
                        shape='circle'
                        onClick={() => {
                            let utter = new SpeechSynthesisUtterance();
                            utter.lang = 'en-US';
                            utter.text = data.name;
                            utter.volume = 1;
                                // speak
                            window.speechSynthesis.speak(utter);
                        }}
                    >
                    </Button>
                </Space>
            )
        },
    ];


    return (
        <WrapperTable
            style={{ width: "100%" }}
            dataSource={data}
            columns={columns}
            rowKey={'_id'}
            pagination={{
                hideOnSinglePage: true
            }}
        />
    )
})

export default TableListVocab