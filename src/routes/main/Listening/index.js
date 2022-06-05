import React, { useState } from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../util/IntlMessages";
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Client/Listening/Feature'
import NewGame from '../../../components/Client/Listening/NewGame'
import TableQuiz from '../../../components/Client/Listening/Table'
import ModalPreview from '../../../components/Client/Listening/ModalPreview'
import { useSelector } from 'react-redux';
const MyListening = () => {
    const newGame = useSelector(({listening}) => listening.newGame)
    const visible = useSelector(({listening}) => listening.visibleModalPreview)
    const [params, setParams] = useState({
        page: 1
    })
    return (
        
        <Layout>
            {visible && <ModalPreview/> }
            {newGame || <Feature/>}
            {newGame && <NewGame/>}
            {newGame || <TableQuiz params={params} setParams={setParams} /> }
        </Layout>
    )
}

export default MyListening