import { Row } from 'antd'
import React, { useState } from 'react'
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Vocab/Features'
import VocabTable from '../../../components/Vocab/Table'

function Vocab() {

  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    type: 'name',
    value: ''
  })

  return (
    <Layout>
      <Row>
        <Feature />
      </Row>
      <Row>
        <VocabTable params={params} setParams={setParams} />
      </Row>
    </Layout>
  )
}

export default Vocab