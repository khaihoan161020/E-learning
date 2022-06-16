import React, { useState } from 'react'
import { Row, Col, Form } from 'antd';
import Layout from '../../../components/components/Layout'
import Features from '../../../components/Listening/Features'
import ListenTable from '../../../components/Listening/Table'
import ListeningModal from '../../../components/Listening/Modal'
import { useDispatch, useSelector } from 'react-redux';
import listeningActions from "../../../appRedux/Listening/actions";
const User = () => {
    const visibleModal = useSelector((state) => state.listening.visibleModal)
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        type: 'question',
        value: ''
    })
    const onSearch = async () => {
        const values = await form.validateFields()
        const tparams = params
        if(values.value && values.value !== '')
            tparams.value = values.value 
        dispatch(listeningActions.fetchListening(tparams))
    }
    return (
        <Layout>
            {visibleModal && <ListeningModal/>}
            <Row>
                <Form form={form} style={{ width: "100%" }}>
                    <Features onSearch={onSearch} />
                </Form>
            </Row>
            <Row>
                <ListenTable params={params} setParams={setParams}/>
            </Row>
        </Layout>
    )
}
export default User;