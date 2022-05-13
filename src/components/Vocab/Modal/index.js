
import { Modal, Button, Form, Input, DatePicker, Radio, InputNumber  } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import userAction from '../../../appRedux/User/actions'
import { useDispatch } from 'react-redux';
import { DateFormat, DateServerFormat } from '../../../util/dateFormat'
import moment from 'moment';
import { useEffect } from 'react';
const VocabModal = ({}) => {
    const [form] = Form.useForm();
    console.log("123");
    const visibleModal = useSelector((state) => state.user.visibleModal)
	// const success = useSelector((state) => state.user.success);
	// const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch();
    const userReq = {
      username: '',
      password: '',
      dob: '',
      email: '',
	  score: null,
	  isDeleted: null
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    const onSubmitUser = async () => {
        // const values = await form.validateFields();
		// if(user)
		// 	userReq.id = user.id
        // if (values.username)
		// 	userReq.username =  values.username

        // if (values.password)
		// 	userReq.password = values.password

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

		// if (user) { // edit => update
		// 	dispatch(userAction.editUser(userReq))
		// }
		// else 
		// 	dispatch(userAction.addUser(userReq))
    }
	// useEffect(()=>{
	// 	if (user) {
	// 		form.setFieldsValue({
	// 			username: user.username,
	// 			dob: user.dob ? moment(user.dob) : null,
	// 			email: user.email,
	// 			score: user.score,
	// 			isDeleted: user.isDeleted
	// 		})
	// 	}
	// // eslint-disable-next-line react-hooks/exhaustive-deps
	// },[user])

	// useEffect(()=>{
	// 	if(success) {
	// 		form.resetFields();
	// 		dispatch(userAction.toggleModal())
	// 	}
	// }, [success])
    return (
        <Modal 
            title={user ? <IntlMessages id="modal.title.editUser"/> : <IntlMessages id="modal.title.newUser"/>}
            visible={visibleModal}
            footer={null}    
            closable={false}
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={() => { onSubmitUser()}}>

                <Form.Item name="username" label={<IntlMessages id="label.username" />} 
                    rules={[{ required: true },
                            {pattern: /^\S*$/, 
                            message: <IntlMessages id="regex.notAllowSpace" />}]}>
                    <Input disabled={user} autoComplete='off' autoCorrect='true' />
                </Form.Item>

                {!user && <Form.Item name="password" label={<IntlMessages id="label.password" />} hasFeedback rules={[ { required: true } ]}>
                    <Input.Password  autoComplete='new-password' />
                </Form.Item> }

                {!user && <Form.Item 
                    name="rePassword" 
                    label={<IntlMessages id="label.rePassword" />} 
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                          required: true,
                          message: <IntlMessages id="regex.confirmPassword" />,
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(<IntlMessages id="regex.confirmPassword" />);
                          },
                        }),
                      ]}>
                    <Input.Password />
                </Form.Item> }
				
                <Form.Item name="dob" label={<IntlMessages id="label.dob" />} >
                    <DatePicker style={{width: '100%'}} format={DateFormat} />
                </Form.Item>

                <Form.Item 
                    name="email" 
                    label={<IntlMessages id="label.email" />}
                    rules={[{ pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "invalid"
                    }]}
                    hasFeedback
                    >
                    <Input  />
                </Form.Item>

				{user && <Form.Item name="score" label={<IntlMessages id="label.score" />} >
						<InputNumber style={{width: '100%'}} />
                </Form.Item>}

				{user && <Form.Item name="isDeleted" label={<IntlMessages id="label.status" />} >
					<Radio.Group >
						<Radio value={false}><IntlMessages id="radio.active" /></Radio>
						<Radio value={true}><IntlMessages id="radio.disable" /></Radio>
					</Radio.Group>
                </Form.Item>}

                <FooterModal >
                    <Button type='primary' htmlType="submit">
                        <IntlMessages id="button.save" />
                    </Button>
                    <Button  
                        onClick={() => dispatch(userAction.toggleModal())}
                    ><IntlMessages id="button.close" /></Button>
                </FooterModal>
                
            </Form>
      </Modal>
    )
}
export default VocabModal;