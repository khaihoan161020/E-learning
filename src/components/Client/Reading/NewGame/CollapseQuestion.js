import React from "react";
import { Collapse } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Panel } = Collapse;
const correctAns = {
    backgroundColor: 'rgba(82,196,26, 1)',
    color: '#ffff'
}
const inCorrectAns = {
    backgroundColor: 'red',
    color: '#ffff'
}
const CollapseQuestion = ({userPick}) => {
  return (
    <Collapse defaultActiveKey={["1"]} style={{width: '100%'}}>
        {userPick.map(item => <Panel header={item.question} key={item.id}>
            {item.data.map(ans => <p style={ ans.isCorrect ? correctAns : null} key={ans._id}> {ans.answer} </p>)}
        </Panel>)}
        
    </Collapse>
  );
};

export default CollapseQuestion;
