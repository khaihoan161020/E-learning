import React, { useState } from 'react'
import { Row, Col, Form } from 'antd';
import Layout from '../../../components/components/Layout'
import Features from '../../../components/Listening/Features'
import ListenTable from '../../../components/Listening/Table'
import ListeningModal from '../../../components/Listening/Modal'
import { useSelector } from 'react-redux';

const User = () => {
    const visibleModal = useSelector((state) => state.listening.visibleModal)

    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        type: 'question',
        value: ''
    })
    return (
        <Layout>
            {visibleModal && <ListeningModal/>}
            <Row>
                <Features/>
            </Row>
            <Row>
                <ListenTable params={params} setParams={setParams}/>
            </Row>
        </Layout>
    )
}
export default User;