import React from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../util/IntlMessages";
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Client/Reading/Feature'
import NewGame from '../../../components/Client/Reading/NewGame'
import TableQuiz from '../../../components/Client/Reading/Table'
import { useSelector } from 'react-redux';
const MyReading = () => {
    const newGame = useSelector(({read}) => read.newGame)
    return (
        <Layout>
            {newGame || <Feature/>}
            {newGame && <NewGame/>}
            <TableQuiz/>
        </Layout>
    )
}

export default MyReading