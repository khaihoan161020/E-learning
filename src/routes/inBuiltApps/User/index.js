import React from 'react'
import { Row, Col, Form } from 'antd';
import Layout from '../../../components/components/Layout'
import Features from '../../../components/User/Features'
import UserTable from '../../../components/User/Table'
const User = () => {
    return (
        <Layout>
            <Row>
                <Features/>
            </Row>
            <Row>
                <UserTable/>
            </Row>
            test
        </Layout>
    )
}
export default User;