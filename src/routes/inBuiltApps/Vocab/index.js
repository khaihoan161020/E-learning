import { Row } from 'antd'
import React from 'react'
import Layout from '../../../components/components/Layout'
import VocabTable from '../../../components/Vocab/Table'

function Vocab() {
  return (
    <Layout>
        <Row>
            <VocabTable />
        </Row>
    </Layout>
  )
}

export default Vocab