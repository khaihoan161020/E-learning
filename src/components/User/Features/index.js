import { Row, Col, Form, Select, Input  } from 'antd';
const Feature = () => {
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
                                <Form.Item label="Custom Filter" name="Test" {...tailLayout}>
                                    <Select defaultValue="lucy"  >
                                        <Option value="Type">Type</Option>
                                        <Option value="lucy">Mean</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={{span: 11, offset: 2}} {...tailLayout}>
                                <Form.Item label="Value" name="">
                                  <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                       
                    </Col>
                    <Col md={5}>
                        Button
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default Feature