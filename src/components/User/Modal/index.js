
import { Modal, Button, Form, Input, DatePicker } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import userAction from '../../../appRedux/User/actions'
import { useDispatch } from 'react-redux';
import { DateFormat } from '../../../util/dateFormat'
const UserModal = ({}) => {
    const [form] = Form.useForm();
    const visibleModal = useSelector((state) => state.user.visibleModal)
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    const onSubmitUser = async () => {
        const values = await form.validateFields();
        console.log(values)
    }
    return (
        <Modal 
            title={<IntlMessages id="modal.title.newUser"/>}
            visible={visibleModal}
            footer={null}    
            closable={false}
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={() => { onSubmitUser()}}>
                <Form.Item name="username" label={<IntlMessages id="label.username" />} 
                    rules={[{ required: true },
                            {pattern: /^\S*$/, 
                            message: <IntlMessages id="regex.notAllowSpace" />}]}>
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                <Form.Item name="password" label={<IntlMessages id="label.password" />} hasFeedback rules={[ { required: true } ]}>
                    <Input.Password  autoComplete='new-password' />
                </Form.Item>
                <Form.Item 
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
                </Form.Item>
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
export default UserModal;