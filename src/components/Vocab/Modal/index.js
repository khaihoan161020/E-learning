
import { Modal, Button, Form, Input } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import vocabActions from '../../../appRedux/Vocab/action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const VocabModal = ({}) => {
    const [form] = Form.useForm();
    const visibleModal = useSelector((state) => state.vocab.visibleModal)
	const success = useSelector((state) => state.vocab.success);
    const vocab = useSelector(state => state.vocab.vocab)
    const dispatch = useDispatch();
    const vocabReq = {
      name: '',
      type: '',
      means: ''
    }
    const layout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 16 },
      };
    const onSubmitUser = async () => {
        const values = await form.validateFields();
		if(vocab)
			vocabReq.id = vocab.id

        if (values.name)
			vocabReq.name =  values.name

        if (values.type)
			vocabReq.type = values.type

        if (values.means)
			vocabReq.means = values.means

		if (vocab) { // edit => update
			dispatch(vocabActions.editVocab(vocabReq))
		}
		else 
			dispatch(vocabActions.addVocab(vocabReq))
    }
	useEffect(()=>{
		if (vocab) {
			form.setFieldsValue({
				name: vocab.name,
				type: vocab.type,
				means: vocab.means,
			})
		}
	},[vocab])

	useEffect(()=>{
		if(success) {
			form.resetFields();
			dispatch(vocabActions.toggleModal())
		}
	}, [success])
    return (
        <Modal 
            title={vocab ? <IntlMessages id="modal.title.editVocab"/> : <IntlMessages id="modal.title.newVocab"/>}
            visible={visibleModal}
            footer={null}    
            closable={false}
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={() => onSubmitUser()}>
                
                <Form.Item name="name" label={<IntlMessages id="label.V_name" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                
                <Form.Item name="type" label={<IntlMessages id="label.V_type" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                
                <Form.Item name="means" label={<IntlMessages id="label.V_mean" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>

                <FooterModal >
                    <Button type='primary' htmlType="submit">
                        <IntlMessages id="button.save" />
                    </Button>
                    <Button  
                        onClick={() => dispatch(vocabActions.toggleModal())}
                    ><IntlMessages id="button.close" /></Button>
                </FooterModal>
                
            </Form>
      </Modal>
    )
}
export default VocabModal;