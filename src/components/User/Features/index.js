import { Row, Col, Form, Select, Input, Button  } from 'antd';
import { WrapperButtons } from './Feature.style'
import IntlMessages from "../../../util/IntlMessages";
import userAction from '../../../appRedux/User/actions'
import { useDispatch } from 'react-redux';
import { useState} from 'react'
import { formatCountdown } from 'antd/lib/statistic/utils';
const Feature = ({onSearch, form}) => {
    const dispatch = useDispatch();
    const [modeInput, setMdoeInput] = useState(true)
    const { Option } = Select;
 
    return (
        <>
            
                <Row justify='start'>
                    <Col md={16}>
                        <Row>
                            <Col md={11}>
                                <Form.Item label={<IntlMessages id="label.customFilter"/>} name="type" >
                                    <Select defaultValue="Username"  onChange={(value) => {
                                        if ( value === 'isDeleted') {
                                            setMdoeInput(false)
                                            form.setFieldsValue({ value: 'Active'})
                                        }
                                        else  {
                                            form.setFieldsValue({ value: ''})
                                            setMdoeInput(true)
                                        }
                                    }}>
                                        <Option value="username">Username</Option>
                                        <Option value="email">Email</Option>
                                        <Option value="isDeleted">Status</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={{span: 11, offset: 2}}>
                                <Form.Item name="value" label={<IntlMessages  id="label.value"/>} >
                                  { modeInput 
                                  ? <Input /> 
                                  : <Select defaultValue="Active" >
                                        <Option value="Active">Active</Option>
                                        <Option value="Deleted">Deleted</Option>
                                    </Select>}
                                </Form.Item>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col md={8}>
                        <WrapperButtons>
                            <Button type="primary"
                                onClick={() => dispatch(userAction.toggleModal())}
                            >
                                <IntlMessages id="button.addNew"/></Button>
                            <Button type="primary"
                                onClick={() => onSearch()}
                            >
                                <IntlMessages id="button.search"/>
                            </Button>
                        </WrapperButtons>
                    
                    </Col>
                </Row>
        
        </>
    )
}
export default Feature