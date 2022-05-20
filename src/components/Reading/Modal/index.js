
import { Modal, Button, Form, Input, Select  } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import vocabActions from '../../../appRedux/Vocab/action';
import { useDispatch } from 'react-redux';
import { DateFormat, DateServerFormat } from '../../../util/dateFormat'
import moment from 'moment';
import { useEffect } from 'react';
import readActions from '../../../appRedux/Reading/action';

const { TextArea } = Input;
const { Option } = Select;

const ReadingModal = ({}) => {
    const [form] = Form.useForm();
    const visibleModal = useSelector((state) => state.read.visibleModal)
	const success = useSelector((state) => state.read.success);
	// const user = useSelector((state) => state.user.user)
    const itemEdit = useSelector(state => state.read.itemEdit)

    const dispatch = useDispatch();

    const readReq = {
      question: '',
      data: []
    }

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 19 },
      };

    const onSubmitUser = async () => {
        const values = await form.validateFields();
		if (itemEdit)
			readReq.id = itemEdit.id

        if (values.question)
			readReq.question = values.question

        if (values.ans1)
			readReq.data.push({
                answer: values.ans1,
                isCorrect: values.isCorrect === '0' ? true : false
            })

        if (values.ans2)
			readReq.data.push({
                answer: values.ans2,
                isCorrect: values.isCorrect === '1' ? true : false
            })

        if (values.ans3)
			readReq.data.push({
                answer: values.ans3,
                isCorrect: values.isCorrect === '2' ? true : false
            })

        if (values.ans4)
			readReq.data.push({
                answer: values.ans4,
                isCorrect: values.isCorrect === '3' ? true : false
            })

		if (itemEdit) { // edit => update
			dispatch(readActions.editReadQues(readReq))
		}
		else 
			dispatch(readActions.addReadQues(readReq))
    }

	useEffect(()=>{
		if (itemEdit) {
            const indexCorrect = itemEdit.data.findIndex(i => i.isCorrect)
			form.setFieldsValue({
                question: itemEdit.question,
				ans1: itemEdit.data[0].answer,
				ans2: itemEdit.data[1].answer,
				ans3: itemEdit.data[2].answer,
				ans4: itemEdit.data[3].answer,
                isCorrect: indexCorrect.toString()
			})
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[itemEdit])

	useEffect(()=>{
		if(success) {
			form.resetFields();
			dispatch(readActions.toggleModal())
		}
	}, [success])
    return (
        <Modal 
            // title={user ? <IntlMessages id="modal.title.editUser"/> : <IntlMessages id="modal.title.newUser"/>}
            title={'Add question'}
            visible={visibleModal}
            footer={null}    
            closable={false}
            width={700}
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={() => onSubmitUser()}>
                
                <Form.Item name="question" label={<IntlMessages id="label.R_question" />} 
                    rules={[{ required: true }]}
                >
                    <TextArea autoSize={{ minRows: 2, maxRows: 3 }} />
                </Form.Item>
                
                <Form.Item name="ans1" label={<IntlMessages id="label.R_answer1" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                
                <Form.Item name="ans2" label={<IntlMessages id="label.R_answer2" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                
                <Form.Item name="ans3" label={<IntlMessages id="label.R_answer3" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                
                <Form.Item name="ans4" label={<IntlMessages id="label.R_answer4" />} 
                    rules={[{ required: true }]}
                >
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>

                <Form.Item name="isCorrect" label={<IntlMessages id="label.R_isCorrect" />} 
                    rules={[{ required: true }]}
                >
                    <Select>
                        <Option value="0">Answer 1</Option>
                        <Option value="1">Answer 2</Option>
                        <Option value="2">Answer 3</Option>
                        <Option value="3">Answer 4</Option>
                    </Select>
                </Form.Item>

                <FooterModal >
                    <Button type='primary' htmlType="submit">
                        <IntlMessages id="button.save" />
                    </Button>
                    <Button  
                        onClick={() => dispatch(readActions.toggleModal())}
                    ><IntlMessages id="button.close" /></Button>
                </FooterModal>
                
            </Form>
      </Modal>
    )
}
export default ReadingModal;