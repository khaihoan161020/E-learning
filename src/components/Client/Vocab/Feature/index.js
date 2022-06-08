import React from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../../util/IntlMessages";
import vocabActions from "../../../../appRedux/Vocab/action"
import { useDispatch } from 'react-redux';
const Feature = () => {
    const dispatch = useDispatch()
    const handleNewGame = () => {
        //fetch data newgame
        dispatch(vocabActions.fetchQuizzRead())
        // new game
        dispatch(vocabActions.newGameClient())
    }
    return (
            <Row>
                <Col md={15}></Col>
                <Col md={9} sm={24} style={{display: 'flex', justifyContent: 'end'}}>
                    <Button onClick={() => handleNewGame()} type='primary'><IntlMessages id="button.newTest"/></Button>
                </Col>
            </Row>
    )
}

export default Feature