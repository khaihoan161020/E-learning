import styled from "styled-components";
import { Form} from "antd";
const FooterModal = styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: end;
    padding-top: 8px;
    button {
        margin: 0;
    }
`

const FormWrap = styled(Form)`
    .ant-row {
        -ms-flex-direction: row;
        flex-direction: row;
    }
     .ant-form-item-label>label {
        height: auto;
        padding: 3px 5px;
        line-height: 24px;
    }
`;
export { FooterModal, FormWrap }