import React, { useEffect, useState, memo } from "react";
import { Row, Col, Button, Result, Input, Form } from "antd";
import IntlMessages from "../../../../util/IntlMessages";
import { useSelector } from "react-redux";
import { SmileOutlined, RightOutlined, WechatOutlined, ConsoleSqlOutlined } from "@ant-design/icons";
import CollapseQuestion from "./CollapseQuestion";
import useTimeBlock  from "../../../../util/CustomHook/useTimeBlock"
import {
    WrapLayout,
  WrapNewGame,
  Question,
  Answer,
  ProgressBar,
  Preview,
  ClockTime
} from "./NewGame.style";
// import { data } from "./dataTest";
import vocabActions from "../../../../appRedux/Vocab/action"
import TableListVocab from './TableListVocab'
import { useDispatch } from 'react-redux';
const TIME_CLOCK = 544; // 5s
const ReadGame = () => {
    const [form] = Form.useForm()
    const [questionIndex, setQuestionIndex] = useState(0);
    const [endOfGame, setEndOfGame] = useState(false);
    const [visiblePreview, setVisiblePreview] = useState(false);
    const [prevNew, setPreNew] = useState(true)
    const [checkType, setCheckType] = useState(false)
    const [listType, setListType] = useState([])
    const [time, setTime ,flag, setFlag] = useTimeBlock(TIME_CLOCK)
    const dispatch = useDispatch()

    const quizQuestion = useSelector((state) => state.vocab.quizQuestion)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const userPick = quizQuestion ? [...quizQuestion] : [];
    const speaker = (data) => {
        let utter = new SpeechSynthesisUtterance();
        utter.lang = 'en-US';
        utter.text = data;
        utter.volume = 1;
            // speak
        window.speechSynthesis.speak(utter);
    }
    const handleClickAns = (e) => {
        setTime(TIME_CLOCK)
        userPick[questionIndex].answerIndex = e.target.dataset.ansid; //answer ID user pick
        if (quizQuestion.length === questionIndex + 1) {
            setQuestionIndex(0);
           
            setCheckType(true)
            
            if (checkType) {
                setEndOfGame(true);
                
            }
            return 
            
        }
        
        setQuestionIndex(prev => prev + 1);
        console.log(userPick)
    };
    const percentProgressBar = () => {
        const countQuestion = quizQuestion?.length;
        if (checkType) 
            return ((questionIndex + 4 ) / (countQuestion * 2)) * 100;
        else return ((questionIndex ) / (countQuestion * 2)) * 100;
    };

    const numberCorrectAnswer = () => {
        let count = 0;
        console.log('redert all')
        userPick.forEach((item, indexVocab) => {
            const answer = item?.means.find((ans, index) => index === parseInt(item.answerIndex))
            
            const correctType = listType.some((el) => el.typeName.toUpperCase() === item.name.toUpperCase())
           
            if((answer && answer.isCorrect) ) {
                count++;
                userPick[indexVocab].count++
            }
            if (correctType ) {
                count++
                userPick[indexVocab].count++
                console.log('render 2', correctType, indexVocab)
            }

        })
        return count
    }
    useEffect(() => {
        if(endOfGame) {
            setTime(0)
            setFlag(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[endOfGame])
    useEffect(() => {
        if (time === 0 && flag && !endOfGame) {
            console.log('questionIndex', questionIndex)
            userPick[questionIndex].answerId = null;
            if (quizQuestion.length === questionIndex + 1){
                setEndOfGame(true);

            }
            else {
                setTime(TIME_CLOCK)
                setFlag(false)
            }
            setQuestionIndex((prev) => prev + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flag])

    const onFinish = (value) => {
       setListType(prev => [...prev, value])
       if (quizQuestion.length === questionIndex + 1 ) {
            setQuestionIndex(0);
            setEndOfGame(true);
        }
        console.log(userPick)
        setQuestionIndex(prev => prev + 1);

    }
    const endGame = () => {
        const params = userPick.map(item => {
            const mode = parseInt(item.count) / 3
            return { vocabId: item._id, mode: mode }
        })
        dispatch(vocabActions.postDataQuizzRead({listQuiz :params }))
        dispatch(vocabActions.newGameClient())
    }
    return (
        <WrapLayout>
        {!prevNew && <ProgressBar percent={percentProgressBar()}> </ProgressBar> }
        <Row>
            <Col md={15}></Col>
            <Col md={9} sm={24} style={{ display: "flex", justifyContent: "end" }}>
                {(!endOfGame && !prevNew ) && <ClockTime><div>{time}</div></ClockTime>}
            </Col>
        </Row>
        {prevNew && <Row justify="center">
             <TableListVocab/>
            <Button style={{backgroundColor: '#20c115', color: '#fff', marginTop: 20, padding: '4px 32px', height: 'auto'}} 
                icon={<RightOutlined />}
                onClick={() => setPreNew(false)}
            >Next</Button>
        </Row>}
        <Row>
            {/* Quiz Game */}
           
            {!endOfGame && quizQuestion && !prevNew && !checkType && (
            <WrapNewGame>
                <Question>{quizQuestion[questionIndex].name}</Question>
                <Row style={{ width: "100%" }} justify="center">
                {quizQuestion[questionIndex].means.map((item, index) => (
                    <Answer span={10}>
                    <span
                        onClick={(e) => handleClickAns(e)}
                        data-ansid={index}
                    >
                        {item.name}
                    </span>
                    </Answer>
                ))
                
                }
                </Row>
            </WrapNewGame>
            )}
            {/* check typing  */}
            {checkType && <WrapNewGame>
                    <div className="poseVocab" onClick={() => speaker(quizQuestion[questionIndex].name)}><WechatOutlined /></div>
                    <Form form={form}   onFinish={onFinish} style={{display: 'flex', justifyContent: 'center'}}>
                        <Row>
                            <Col span={16}>
                                <Form.Item name="typeName">
                                    <Input ></Input>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Button htmlType="submit">Ok</Button>
                            </Col>
                        </Row>
                        
                        
                    </Form>
                </WrapNewGame>}
           {endOfGame && quizQuestion && (
            <Preview>
                <Result
                icon={<SmileOutlined />}
                status="success"
                title="Great, we have done all the question!"
                subTitle={`You has been correct ${numberCorrectAnswer()}/${quizQuestion.length}`}
                extra={[
                    <Button type="primary" key="console" onClick={() => setVisiblePreview(prev => !prev)}>
                        <IntlMessages id="button.preview"/>
                    </Button>,
                    <Button key="buy" onClick={() => endGame() }>
                        <IntlMessages id="button.back"/>
                    </Button>,
                ]}
                />
            </Preview>
            )}
        </Row>
        <Row>
             {/* Preview Question Collapse */}
             {visiblePreview && <CollapseQuestion userPick={userPick}></CollapseQuestion>}
        </Row>
        </WrapLayout>
    );
};

export default memo(ReadGame);
