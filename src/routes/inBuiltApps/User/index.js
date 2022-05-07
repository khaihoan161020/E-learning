import React, { useState } from 'react'
import { Row, Col, Form } from 'antd';
import Layout from '../../../components/components/Layout'
import Features from '../../../components/User/Features'
import UserTable from '../../../components/User/Table'
import UserModal from '../../../components/User/Modal'
import { useSelector } from 'react-redux';

const User = () => {
    const visibleModal = useSelector((state) => state.user.visibleModal)

    const [params, setParams] = useState({
        page: 1,
        limit: 10,
        type: 'username',
        value: ''
    })
    return (
        <Layout>
            {visibleModal && <UserModal/>}
            <Row>
                <Features/>
            </Row>
            <Row>
                <UserTable params={params}/>
            </Row>
        </Layout>
    )
}
export default User;