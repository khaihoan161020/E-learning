
import { Modal, Button, Form, Input, DatePicker } from 'antd';
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style"
import { useSelector } from 'react-redux';
import userAction from '../../../appRedux/User/actions'
import { useDispatch } from 'react-redux';
const UserModal = () => {
    const [form] = Form.useForm();
    const visibleModal = useSelector((state) => state.user.visibleModal)
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
    return (
        <Modal 
            title={<IntlMessages id="modal.title.newUser"/>}
            visible={visibleModal}
            footer={null}    
            closable={false}
        >
            <Form {...layout} form={form} name="control-hooks" onFinish={() => {}}>
                <Form.Item name="username" label={<IntlMessages id="label.username" />} rules={[{ required: true }]}>
                    <Input autoComplete='off' autoCorrect='true' />
                </Form.Item>
                <Form.Item name="password" label={<IntlMessages id="label.password" />} rules={[{ required: true }]}>
                    <Input.Password  autoComplete='new-password' />
                </Form.Item>
                <Form.Item name="rePassword" label={<IntlMessages id="label.rePassword" />} rules={[{ required: true }]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item name="dob" label={<IntlMessages id="label.dob" />} >
                    <DatePicker style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item name="email" label={<IntlMessages id="label.email" />} >
                    <Input  />
                </Form.Item>
                <FooterModal >
                    <Button type='primary' ><IntlMessages id="button.save" /></Button>
                    <Button  
                        onClick={() => dispatch(userAction.toggleModal())}
                    ><IntlMessages id="button.close" /></Button>
                </FooterModal>
            </Form>
      </Modal>
    )
}
export default UserModal;