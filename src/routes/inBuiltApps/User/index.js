import React, { useState } from "react";
import { Row, Col, Form } from "antd";
import Layout from "../../../components/components/Layout";
import Features from "../../../components/User/Features";
import UserTable from "../../../components/User/Table";
import UserModal from "../../../components/User/Modal";
import { useDispatch, useSelector } from "react-redux";
import userAction from "../../../appRedux/User/actions";

const User = () => {
  const visibleModal = useSelector((state) => state.user.visibleModal);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    type: "username",
    value: "",
  });
  const onSearch = async () => {
    const values = await form.validateFields();
    console.log(values);
    const tparams = params;
    if (values.type) tparams.type = values.type;
    if (values.value) {
      tparams.value = values.value;
    }

    if (values.type === "isDeleted") {
      if (values.value === "Deleted") tparams.value = true;
      if (values.value === "Active") tparams.value = false;
    }

    dispatch(userAction.fetchUser(params));
  };
  return (
    <Layout>
      {visibleModal && <UserModal />}
      <Row>
        <Form form={form} style={{ width: "100%" }}>
          <Features form={form} onSearch={onSearch} />
        </Form>
      </Row>
      <Row>
        <UserTable params={params} setParams={setParams} />
      </Row>
    </Layout>
  );
};
export default User;
