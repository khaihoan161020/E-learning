import {
  Modal,
  Button,
  Form,
  Input,
  Upload,
  Col,
  Row,
  Switch,
  Space,
  Checkbox,
  Radio,
} from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import IntlMessages from "../../../util/IntlMessages";
import { FooterModal } from "./Modal.style";
import { useSelector } from "react-redux";
import listeningActions from "../../../appRedux/Listening/actions";
import notification from "../../../components/Notification";
import { useDispatch } from "react-redux";
import { DateFormat, DateServerFormat } from "../../../util/dateFormat";
import moment from "moment";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormWrap } from "./Modal.style";
const ListeningModal = ({}) => {
  const [image, setImage] = useState([]);
  const [form] = Form.useForm();
  const [error, setError] = useState(false);
  const [linkUrlAsset, setLinkUrlAsset] = useState(null)
  const visibleModal = useSelector((state) => state.listening.visibleModal);
  const success = useSelector((state) => state.listening.success);
  const itemEdit = useSelector((state) => state.listening.itemEdit);
  const dispatch = useDispatch();

  const reqParam = {
	  question : "",
	  audio: "",
	  data: []
  }
  useEffect(()=>{
	if(success)
		dispatch(listeningActions.toggleModal())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success])
  const onSubmit = async () => {
    const values = await form.validateFields();
	if(itemEdit)
		reqParam.id = itemEdit.id
	if(values.question)
		reqParam.question = values.question

	if(linkUrlAsset && !itemEdit)
		reqParam.audio = linkUrlAsset
	if(values.ans1)
		reqParam.data.push({
			answer: values.ans1,
			isCorrect: values.isCorrect === '0' ? true : false
		})
	if(values.ans2)
		reqParam.data.push({
			answer: values.ans2,
			isCorrect: values.isCorrect === '1' ? true : false
	})
	if(values.ans3)
		reqParam.data.push({
			answer: values.ans3,
			isCorrect: values.isCorrect === '2' ? true : false
	})
	if(values.ans4)
		reqParam.data.push({
			answer: values.ans4,
			isCorrect: values.isCorrect === '3' ? true : false
	})
    if (itemEdit) {
      // edit => update
      dispatch(listeningActions.editListening(reqParam));
    } else dispatch(listeningActions.addListening(reqParam));
  };

  const beforeUpload = (file) => {
    const isAudio =
      file.type === "audio/mpeg" ||
      file.type === "mp3" ||
      file.type === "mp3,wav";
    if (!isAudio) {
      notification("error", "You can only upload audio file!", "");
      setError(true);
    }
    const isLt2M = file.size / 1024 / 1024 < 4;
    if (!isLt2M) {
      notification("error", "Audio must smaller than 4MB!", "");
      setError(true);
    }
    return isAudio && isLt2M;
  };
  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        // setProgress(percent);
        var progress = percent;
        if (percent === 100) {
          setTimeout(() => progress, 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    formData.append("file", file);
    formData.append("upload_preset", "e-learning");
    formData.append("folder", "e-learning");

    try {
      if (error) {
        onError(error);
        throw error;
      }
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/dz6bsawr6/upload`,
        formData,
        config
      );
      onSuccess("Ok");
	  setLinkUrlAsset(res.data.secure_url)
      // dispatch(saveImgProduct({
      //     url: res.data.secure_url,
      //     cloudinaryId: res.data.public_id
      // }))
      console.log("server res: ", res);
    } catch (error) {
      console.log("Eroor: ", error);
      onError({ error });
    }
  };
  const handleOnChange = ({ file, fileList, event }) => {
    setImage(fileList);
  };

  useEffect(() => {
    form.setFieldsValue({
      isCorrect: '0'
    });
  }, []);
  useEffect(()=>{
	if (itemEdit) {
		const indexCorrect = itemEdit.data.findIndex((item) => item.isCorrect)
		console.log(indexCorrect)
		form.setFieldsValue({
			question: itemEdit.question,
			ans1: itemEdit.data[0].answer,
			ans2: itemEdit.data[1].answer,
			ans3: itemEdit.data[2].answer,
			ans4: itemEdit.data[3].answer,
			isCorrect: indexCorrect.toString()
		  });
	}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[itemEdit])
  return (
    <Modal
      title={
        itemEdit ? (
          <IntlMessages id="modal.title.editListening" />
        ) : (
          <IntlMessages id="modal.title.newListening" />
        )
      }
      width={900}
      visible={visibleModal}
      footer={null}
      closable={false}
    >
      <FormWrap
        form={form}
        name="control-hooks"
        layout="vertical"
        onFinish={() => {
          onSubmit();
          console.log("ok");
        }}
      >
        <Row>
          <Col span={24}>
            <Form.Item
              name="question"
              label={<IntlMessages id="label.question" />}
            >
              <Input  autoComplete="off" autoCorrect="true" />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              name="audio"
              label={<IntlMessages id="label.fileAudio" />}
            >
              <Upload
                beforeUpload={beforeUpload}
                customRequest={uploadImage}
                onChange={handleOnChange}
                listType="text"
              >
                {image.length < 1 && (
                  <Button icon={<UploadOutlined />}>Click to Upload</Button>
                )}
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="ans1" label={<IntlMessages id="label.answer" />}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="ans2" label={<IntlMessages id="label.answer" />}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="ans3" label={<IntlMessages id="label.answer" />}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="ans4" label={<IntlMessages id="label.answer" />}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item name="isCorrect" label={<IntlMessages id="label.isCorrect" />}>
              <Radio.Group>
                <Radio value="0">Answer 1</Radio>
                <Radio value="1">Answer 2</Radio>
                <Radio value="2">Answer 3</Radio>
				<Radio value="3">Answer 4</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>

        <FooterModal>
          <Button type="primary" htmlType="submit">
            <IntlMessages id="button.save" />
          </Button>
          <Button onClick={() => dispatch(listeningActions.toggleModal())}>
            <IntlMessages id="button.close" />
          </Button>
        </FooterModal>
      </FormWrap>
    </Modal>
  );
};
export default ListeningModal;
