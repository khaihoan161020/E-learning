import { Row, Form } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../components/components/Layout";
import Feature from "../../../components/Reading/Features";
import ReadingModal from "../../../components/Reading/Modal";
import ReadTable from "../../../components/Reading/Table";
import readActions from '../../../appRedux/Reading/action';
function Reading() {
	const visibleModal = useSelector((state) => state.read.visibleModal);
	const [form] = Form.useForm()
	const dispatch = useDispatch()
	const [params, setParams] = useState({
		page: 1,
		limit: 10,
		type: "question",
		value: "",
	});
	const onSearch = async () => {
        const values = await form.validateFields()
		console.log(values)
        const tparams = params
        if(values.value && values.value !== '')
            tparams.value = values.value 
			dispatch(readActions.fetchRead(params));
    }
  return (
	<Layout>
		{visibleModal && <ReadingModal />}
		<Row>
			<Form form={form} style={{ width: "100%" }}>
				<Feature onSearch={onSearch} />
			</Form>
		</Row>
		<Row>
			<ReadTable params={params} setParams={setParams} />
		</Row>
	</Layout>
  );
}

export default Reading;
