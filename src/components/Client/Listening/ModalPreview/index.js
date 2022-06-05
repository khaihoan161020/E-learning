import { Modal, Button, Form, Input, Select } from "antd";
import IntlMessages from "../../../../util/IntlMessages";
import { FooterModal, WrapModal } from "./Modal.style";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import listeningActions from "../../../../appRedux/Listening/actions";
import { Collapse } from "antd";
const { TextArea } = Input;
const { Option } = Select;
const { Panel } = Collapse;
const ModalPreview = ({}) => {
  const [form] = Form.useForm();
  const visibleModal = useSelector((state) => state.listening.visibleModalPreview);
  const item = useSelector((state) => state.listening.quizPreviewItem);
  const audio = useRef()
  const dispatch = useDispatch();

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 19 },
  };
  const correctAns = {
    backgroundColor: "rgba(82,196,26, 1)",
    color: "#ffff",
  };
  const nonPickAns = {
    backgroundColor: "rgba(82,196,26, .4)",
    color: "#ffff",
  };
  const inCorrectAns = {
    backgroundColor: "rgba(255, 0, 0, .7)",
    color: "#ffff",
  };
  const colorAnswer = (item, ans) => {
    // if(item?.answerId) return userAns
    if (ans.isCorrect) {
      if (item?.answerId) return correctAns;
      else return nonPickAns;
    }
    if (item?.answerId === ans._id && !ans.isCorrect) {
      return inCorrectAns;
    }
  };

  return (
    <WrapModal
      title={<IntlMessages id="modal.title.preview" />}
      visible={visibleModal}
      footer={null}
      closable={false}
      width={700}
    >
      <Form {...layout} form={form} name="control-hooks">
      <audio controls ref={audio} >
                    <source src={item.questionId.audio.url} type="audio/ogg" />
                </audio>
        <Collapse defaultActiveKey={["0"]} style={{ width: "100%" }}>
          <Panel header={item.questionId.question} key={item.id}>
            {item.questionId.data.map((ans) => (
              <p style={colorAnswer(item, ans)} key={ans._id}>
                {" "}
                {ans.answer}{" "}
              </p>
            ))}
            <div style={{padding: 10, backgroundColor: '#038fde', color: '#fff'}}>
                {item.questionId.solution}
            </div>
          </Panel>
        </Collapse>

        <FooterModal>
          <Button onClick={() => dispatch(listeningActions.toggleModalPreview())}>
            <IntlMessages id="button.close" />
          </Button>
        </FooterModal>
      </Form>
    </WrapModal>
  );
};
export default ModalPreview;
