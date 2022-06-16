import { Row, Form } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Vocab/Features'
import VocabModal from '../../../components/Vocab/Modal'
import VocabTable from '../../../components/Vocab/Table'
import vocabActions from '../../../appRedux/Vocab/action';
function Vocab() {
  const visibleModal = useSelector(state => state.vocab.visibleModal)
  const [params, setParams] = useState({
    page: 1,
    limit: 10,
    type: 'name',
    value: ''
  })
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  	const onSearch = async () => {
		const values = await form.validateFields();
		
		const tparams = params;
		if (values.type) tparams.type = values.type;
		if (values.value) {
			tparams.value = values.value;
		}

		dispatch(vocabActions.fetchVocab(tparams))
  };
  return (
    <Layout>
		{visibleModal && <VocabModal />}
		<Row>
			<Form form={form} style={{width: '100%'}}>
				<Feature onSearch={onSearch}/>
			</Form>
		</Row>
		<Row>
			<VocabTable params={params} setParams={setParams} />
		</Row>
    </Layout>
  )
}

export default Vocab