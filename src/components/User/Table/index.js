import { WrapperTable } from "./Table.style";
import { Tag } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../../appRedux/User/actions";
const UserTable = ({ params }) => {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.user.data)
	useEffect(() => {
		dispatch(userAction.fetchUser(params));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);
  	const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: <IntlMessages id="table.column.userName" />,
      dataIndex: "username",
      key: "username",
    },
    {
      title: <IntlMessages id="table.column.dob" />,
      dataIndex: "age",
      key: "age",
    },
    {
      title: <IntlMessages id="table.column.email" />,
      dataIndex: "address",
      key: "address",
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
		  if(item) return <Tag color="magenta">Deleted</Tag>
		  else return <Tag color="green">Active</Tag>
	  }
    },
    {
      title: <IntlMessages id="table.column.action" />,
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <WrapperTable
      style={{ width: "100%" }}
      dataSource={data.rows}
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
  );
};
export default UserTable;
