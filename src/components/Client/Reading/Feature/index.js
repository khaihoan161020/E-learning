import React from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../../util/IntlMessages";
import readActions from "../../../../appRedux/Reading/action"
import { useDispatch } from 'react-redux';
const Feature = () => {
    const dispatch = useDispatch()
    return (
            <Row>
                <Col md={15}></Col>
                <Col md={9} sm={24} style={{display: 'flex', justifyContent: 'end'}}>
                    <Button onClick={() => dispatch(readActions.newGameClient())} type='primary'><IntlMessages id="button.newReading"/></Button>
                </Col>
            </Row>
    )
}

export default Feature