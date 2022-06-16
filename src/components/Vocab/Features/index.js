import { Row, Col, Form, Select, Input, Button } from "antd";
import { WrapperButtons } from "./Feature.style";
import IntlMessages from "../../../util/IntlMessages";
import { useDispatch } from "react-redux";
import vocabActions from "../../../appRedux/Vocab/action";

const Feature = ({ onSearch }) => {
  const dispatch = useDispatch();

  const { Option } = Select;
  const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
  };
  return (
    <>
      <Row justify="start">
        <Col md={16}>
          <Row>
            <Col md={11}>
              <Form.Item
                label={<IntlMessages id="label.customFilter" />}
                name="type"
              >
                <Select defaultValue="Name">
                  <Option value="name">Name</Option>
                  <Option value="type">Type</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col md={{ span: 11, offset: 2 }} {...tailLayout}>
              <Form.Item label={<IntlMessages id="label.V_search" />} name="value">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <WrapperButtons>
            <Button type="primary" onClick={() => onSearch()}>
              <IntlMessages id="button.search" />
            </Button>
            <Button
              type="primary"
              onClick={() => dispatch(vocabActions.toggleModal())}
            >
              <IntlMessages id="button.addNew" />
            </Button>
          </WrapperButtons>
        </Col>
      </Row>
    </>
  );
};
export default Feature;
