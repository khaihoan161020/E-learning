import { WrapperTable } from "./Table.style";
import {
	EditFilled,
	DeleteFilled
  } from '@ant-design/icons';
import { Button, Tag, Space } from "antd";
import IntlMessages from "../../../util/IntlMessages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../../appRedux/User/actions";
import { DateFormat } from '../../../util/dateFormat'
import moment from "moment";
const UserTable = ({ params, setParams }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.user.loading);
  const success = useSelector((state) => state.user.success);
  useEffect(() => {
	  	if(success)
		  dispatch(userAction.fetchUser(params))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

  useEffect(() => {
    dispatch(userAction.fetchUser(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, params]);
 
  const columns = [
    {
      title: <IntlMessages id="table.column.userName" />,
      dataIndex: "username",
      key: "username",
    },
    {
      title: <IntlMessages id="table.column.dob" />,
      dataIndex: "dob",
      key: "dob",
	  render: (item) => item ? moment(item).format(DateFormat) : null
    },
    {
      title: <IntlMessages id="table.column.email" />,
      dataIndex: "email",
      key: "email",
	  
    },
    {
      title: <IntlMessages id="table.column.score" />,
      dataIndex: "score",
      key: "score",
    },
    {
      title: <IntlMessages id="table.column.status" />,
      dataIndex: "isDeleted",
      key: "isDeleted",
      render: (item) => {
        if (item) return <Tag color="magenta">Deleted</Tag>;
        else return <Tag color="green">Active</Tag>;
      },
    },
    {
      title: <IntlMessages id="table.column.action" />,
      key: "action",
	  width: 90,
	  render: (data) => {
		  return <Space>
			  <Button type="primary" shape="circle" icon={<EditFilled />} size="small"
				onClick={()=> dispatch(userAction.toggleModal(data))}
			  ></Button>
			  <Button danger shape="circle" icon={<DeleteFilled />} size="small"></Button>
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
        total: data.count,
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
export default UserTable;
