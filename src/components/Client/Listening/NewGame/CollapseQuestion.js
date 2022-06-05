import React from "react";
import { Collapse, Divider  } from "antd";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const { Panel } = Collapse;
const correctAns = {
  backgroundColor: "rgba(82,196,26, 1)",
  color: "#ffff",
};
const nonPickAns = {
  backgroundColor: "rgba(82,196,26, .4)",
  color: "#ffff",
};
const inCorrectAns = {
  backgroundColor: "rgba(255, 0, 0, .7)",
  color: "#ffff",
};
const CollapseQuestion = ({ userPick }) => {
  const colorAnswer = (item, ans) => {
    // if(item?.answerId) return userAns
    if (ans.isCorrect  ) {
      if (item?.answerId)
        return correctAns
      else return nonPickAns
    }
    if (item?.answerId === ans._id && !ans.isCorrect) {
       return inCorrectAns;
    }
  };
  return (
    <Collapse defaultActiveKey={["1"]} style={{ width: "100%" }}>
      {userPick.map((item) => (
        <Panel header={item.question} key={item.id}>
          {item.data.map((ans) => (
            <p style={colorAnswer(item, ans)} key={ans._id}>
              {" "}
              {ans.answer}{" "}
            </p>
          ))}
          <div style={{padding: 10, backgroundColor: '#038fde', color: '#fff'}}>
            {item.solution}
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseQuestion;
