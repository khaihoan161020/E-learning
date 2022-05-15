import { Row } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Vocab/Features'
import VocabModal from '../../../components/Vocab/Modal'
import VocabTable from '../../../components/Vocab/Table'

function Vocab() {
  const visibleModal = useSelector(state => state.vocab.visibleModal)
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    type: 'name',
    value: ''
  })

  return (
    <Layout>
      {visibleModal && <VocabModal />}
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