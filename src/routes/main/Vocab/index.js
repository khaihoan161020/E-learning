import React, { useState } from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../util/IntlMessages";
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Client/Vocab/Feature'
import NewGame from '../../../components/Client/Vocab/NewGame'
import TableQuiz from '../../../components/Client/Reading/Table'
import ModalPreview from '../../../components/Client/Reading/ModalPreview'
import { useSelector } from 'react-redux';
const MyReading = () => {
    const newGame = useSelector(({vocab}) => vocab.newGame)
    const visible = useSelector(({vocab}) => vocab.visibleModalPreview)
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

export default MyReading