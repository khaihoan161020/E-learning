import styled from "styled-components";
import { Modal }  from "antd";
const WrapModal = styled(Modal)`
    .ant-collapse-content>.ant-collapse-content-box {
        padding: 0px;

        p {
            padding: 16px;
            
        }
    }
`
const FooterModal = styled.div`
    border-top: 1px solid #f0f0f0;
    display: flex;
    justify-content: end;
    padding-top: 8px;
    button {
        margin: 0;
    }
`
export { FooterModal, WrapModal }