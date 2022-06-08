import styled from "styled-components";
import { Table } from 'antd';
const WrapperTable = styled(Table)`
    width: 100%;
    .ant-table-cell {
        &::before {
            background-color: rgb(226 225 225 / 50%) !important;
        }
    }
`;
export { WrapperTable }