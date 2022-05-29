import React from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../util/IntlMessages";
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Client/Reading/Feature'
import NewGame from '../../../components/Client/Reading/NewGame'
import { useSelector } from 'react-redux';
const MyReading = () => {
    const newGame = useSelector(({read}) => read.newGame)
    return (
        <Layout>
            {/* {newGame || <Feature/>} */}
            {<NewGame/>}
        </Layout>
    )
}

export default MyReading