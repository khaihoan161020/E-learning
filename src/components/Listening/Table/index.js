import { WrapperTable } from "./Table.style";
import {
	EditFilled,
	DeleteFilled
  } from '@ant-design/icons';
import { Button, Tag, Space } from "antd";
import IntlMessages from "../../../util/IntlMessages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import listeningActions from "../../../appRedux/Listening/actions";
import { DateFormat } from '../../../util/dateFormat'
import moment from "moment";
const ListenTable = ({ params, setParams }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listening.data);
  const loading = useSelector((state) => state.listening.loading);
  const success = useSelector((state) => state.listening.success);
  useEffect(() => {
	  	if(success)
		  dispatch(listeningActions.fetchListening(params))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    dispatch(listeningActions.fetchListening(params))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params]);
 
  const columns = [
    {
      title: <IntlMessages id="table.column.question" />,
      dataIndex: "question",
      key: "question",
    },
    {
      title: <IntlMessages id="table.column.audio" />,
      dataIndex: "audio",
      key: "audio",
      width: 300,
      render: (item) => {
        return <audio controls>
            <source src={item}  />
      </audio>
      }
    },
    {
      title: <IntlMessages id="table.column.answer" />,
      dataIndex: "data",
      key: "data",
      render: (listItem) => {
        return listItem.map((item, index) => <div key={index} style={{}}>{item.answer}</div>)
      }
    },
    {
      title: <IntlMessages id="table.column.action" />,
      key: "action",
	    width: 90,
      render: (data) => {
        return <Space>
          <Button type="primary" shape="circle" icon={<EditFilled />} size="small"
          onClick={()=> dispatch(listeningActions.toggleModal(data))}
          ></Button>
          <Button danger shape="circle" icon={<DeleteFilled />} size="small"
          onClick={()=> dispatch(listeningActions.deleteListeningbyID(data.id))}
          ></Button>
          </Space>
      }
    },
  ];
  
  return (
    <WrapperTable
      style={{ width: "100%" }}
      dataSource={data.rows}
      columns={columns}
      rowKey={"_id"}
	    loading={loading}
      pagination={{
        total: 20,
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50"],
        onChange: (page, limit) => {
          setParams({...params, page: page, limit: limit})
        },
      }}
    />
  );
};
export default ListenTable;
