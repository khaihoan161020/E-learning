import styled from "styled-components";
import { Col, Progress } from "antd";

const WrapLayout = styled.div`
    .ant-collapse-content>.ant-collapse-content-box {
        padding: 0px;

        p {
            padding: 16px;
            
        }
    }

`;

const WrapNewGame = styled.div`
  margin-top: 25px;
  width: 100%;
  display: block;
  transition: all 0.3s ease;
`;

const Question = styled.h3`
    font-weight: bold,
    font-size: 26px;
    text-align: center;
`;
const Answer = styled(Col)`
  padding: 0;
  cursor: pointer;
  span {
    display: block;
    margin: 12px;
    border-radius: 8px;
    padding: 20px 12px;
    background-color: #0fb70c;
    color: #fff;
    &:hover {
      background-color: #0da308;
      color: red;
    }
  }
`;
const ProgressBar = styled(Progress)`
  height: 20px;
`;
const Preview = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ClockTime = styled.div`
  width: 40px;
  height: 40px;
  line-height: 38px;
  text-align: center;
  position: relative;
  div {
    position: relative;
    top: 5px;
    left: auto;
    width: 40px;
    font-size: 20px;
    text-align: center;
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: text-center;
  }
  div::after {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    width: 100%;
    height: 100%;
    border: 2px solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 1s linear infinite;
  }
    @-webkit-keyframes spinner-border {
        to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }

    @keyframes spinner-border {
        to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
        }
    }
`;
export { WrapNewGame, Answer, Question, ProgressBar, Preview, ClockTime, WrapLayout };
