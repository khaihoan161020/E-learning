import React from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../../util/IntlMessages";
import listeningActions from "../../../../appRedux/Listening/actions"
import { useDispatch } from 'react-redux';
const Feature = () => {
    const dispatch = useDispatch()
    const handleNewGame = () => {
        //fetch data newgame
        dispatch(listeningActions.fetchQuizzRead())
        // new game
        dispatch(listeningActions.newGameClient())
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