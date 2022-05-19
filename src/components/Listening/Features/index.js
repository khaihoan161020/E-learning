import { Row, Col, Form, Select, Input, Button  } from 'antd';
import { WrapperButtons } from './Feature.style'
import IntlMessages from "../../../util/IntlMessages";
import listeningActions from "../../../appRedux/Listening/actions";
import { useDispatch } from 'react-redux';

const Feature = () => {
    const dispatch = useDispatch();

    const { Option } = Select;
    const tailLayout = {
        wrapperCol: { offset: 4, span: 20 },
      };
    return (
        <>
            <Form 
                style={{width: '100%'}}
            >
                <Row justify='start'>
                    <Col md={16}>
                        <Row>
                            <Col md={11}>
                                <Form.Item label={<IntlMessages id="label.customFilter"/>} name="Test" {...tailLayout}>
                                    <Select defaultValue="lucy"  >
                                        <Option value="Type">Type</Option>
                                        <Option value="lucy">Mean</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={{span: 11, offset: 2}} {...tailLayout}>
                                <Form.Item label={<IntlMessages id="label.value"/>} name="">
                                  <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col md={8}>
                        <WrapperButtons>
                            <Button type="primary"
                                onClick={() => dispatch(listeningActions.toggleModal())}
                            >
                                <IntlMessages id="button.addNew"/></Button>
                            <Button type="primary">
                                <IntlMessages id="button.search"/>
                            </Button>
                        </WrapperButtons>
                    
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default Feature