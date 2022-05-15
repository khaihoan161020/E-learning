
import { Modal, Button, Form, Input, DatePicker, Radio, InputNumber  } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import vocabActions from '../../../appRedux/Vocab/action';
import { useDispatch } from 'react-redux';
import { DateFormat, DateServerFormat } from '../../../util/dateFormat'
import moment from 'moment';
import { useEffect } from 'react';
const VocabModal = ({}) => {
    const [form] = Form.useForm();
    const visibleModal = useSelector((state) => state.vocab.visibleModal)
	const success = useSelector((state) => state.vocab.success);
	// const user = useSelector((state) => state.user.user)
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

		// if (values.dob)
		// 	userReq.dob = moment(values.dob).format(DateServerFormat)
		// else userReq.dob = null

		// if (values.email)
		// 	userReq.email = values.email
		// else userReq.email = null
	
		// if(values.score) 
		// 	userReq.score = values.score

		// if(values.isDeleted) 
		// 	userReq.isDeleted = values.isDeleted

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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[vocab])

	useEffect(()=>{
		if(success) {
			form.resetFields();
			dispatch(vocabActions.toggleModal())
		}
	}, [success])
    return (
        <Modal 
            // title={user ? <IntlMessages id="modal.title.editUser"/> : <IntlMessages id="modal.title.newUser"/>}
            title={'Add vocab'}
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