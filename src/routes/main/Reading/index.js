import React, { useState } from 'react'
import { Row, Col, Button} from "antd"
import IntlMessages from "../../../util/IntlMessages";
import Layout from '../../../components/components/Layout'
import Feature from '../../../components/Client/Reading/Feature'
import NewGame from '../../../components/Client/Reading/NewGame'
import TableQuiz from '../../../components/Client/Reading/Table'
import ModalPreview from '../../../components/Client/Reading/ModalPreview'
import { useSelector } from 'react-redux';
const MyReading = () => {
    const newGame = useSelector(({read}) => read.newGame)
    const visible = useSelector(({read}) => read.visibleModalPreview)
    const [params, setParams] = useState({
        page: 1
    })
    return (
        
        <Layout>
            {visible && <ModalPreview/> }
            {newGame || <Feature/>}
            {newGame && <NewGame/>}
            <TableQuiz params={params} setParams={setParams} />
        </Layout>
    )
}

export default MyReading