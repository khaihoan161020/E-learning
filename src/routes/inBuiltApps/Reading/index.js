import { Row } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Reading/Features'
import ReadingModal from '../../../components/Reading/Modal'
import ReadTable from '../../../components/Reading/Table'


function Reading() {
  const visibleModal = useSelector(state => state.read.visibleModal)
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    type: 'question',
    value: ''
  })

  return (
    <Layout>
      {visibleModal && <ReadingModal />}
      <Row>
        <Feature />
      </Row>
      <Row>
        <ReadTable params={params} setParams={setParams} />
      </Row>
    </Layout>
  )
}

export default Reading