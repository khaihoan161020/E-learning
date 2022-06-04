import React, { useEffect, useState, memo } from "react";
import { Row, Col, Button, Result } from "antd";
import IntlMessages from "../../../../util/IntlMessages";
import { useSelector } from "react-redux";
import { SmileOutlined } from "@ant-design/icons";
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
import readActions from "../../../../appRedux/Reading/action"
import { useDispatch } from 'react-redux';
const TIME_CLOCK = 5 ; // 5s
const ReadGame = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [endOfGame, setEndOfGame] = useState(false);
    const [visiblePreview, setVisiblePreview] = useState(false);
    const [time, setTime ,flag, setFlag] = useTimeBlock(TIME_CLOCK)
    const dispatch = useDispatch()

    const quizQuestion = useSelector((state) => state.read.quizQuestion)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const userPick = quizQuestion ? [...quizQuestion] : [];

    
    const handleClickAns = (e) => {
        console.log('count', e.target.dataset.ansid, questionIndex)
        setTime(TIME_CLOCK)
        userPick[questionIndex].answerId = e.target.dataset.ansid; //answer ID user pick
        if (quizQuestion.length === questionIndex + 1) {
            setEndOfGame(true);
            
        }
         setQuestionIndex((prev) => prev + 1);
        
        console.log(userPick)
    };
    const percentProgressBar = () => {
        const countQuestion = quizQuestion?.length;
        return ((questionIndex ) / countQuestion) * 100;
    };

    const numberCorrectAnswer = () => {
        let count = 0;
        userPick.forEach(item => {
            const answer = item?.data.find((ans) => ans._id === item.answerId)
            if(answer && answer?.isCorrect)
                count++;
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


    const endGame = () => {
        // const params = userPick.map(item => ({ questionId: item._id, answerId: item.answerId}))
        const params = userPick.map(item => {
            const ansPick = item.data.find(ans => ans._id === item.answerId)
            console.log(ansPick)
            return { questionId: item._id, answerId: item.answerId, correctPick: ansPick ? ansPick?.isCorrect : null}
        })
        dispatch(readActions.postDataQuizzRead({listQuiz :params }))
        dispatch(readActions.newGameClient())
    }
    return (
        <WrapLayout>
        <ProgressBar percent={percentProgressBar()}> </ProgressBar>
        <Row>
            <Col md={15}></Col>
            <Col md={9} sm={24} style={{ display: "flex", justifyContent: "end" }}>
                {!endOfGame && <ClockTime><div>{time}</div></ClockTime>}
            </Col>
        </Row>
        <Row>
            {/* Quiz Game */}
            {!endOfGame && quizQuestion && (
            <WrapNewGame>
                <Question>{quizQuestion[questionIndex].question}</Question>
                <Row style={{ width: "100%" }} justify="center">
                {quizQuestion[questionIndex].data.map((item) => (
                    <Answer span={10}>
                    <span
                        onClick={(e) => handleClickAns(e)}
                        data-ansid={item._id}
                    >
                        {item.answer}
                    </span>
                    </Answer>
                ))}
                </Row>
            </WrapNewGame>
            )}
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
