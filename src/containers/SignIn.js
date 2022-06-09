import React, {useEffect} from "react";
import {Button, Checkbox, Form, Input, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";

import IntlMessages from "util/IntlMessages";
import CircularProgress from "../components/CircularProgress";

import authAction from "../appRedux/Auth/actions";

const loginStyle = {
    backgroundImage: 'url(https://mec.hueic.edu.vn/wp-content/uploads/2020/05/129453972-british-english-language-learning-class-vector-illustration-brittish-flag-logo-england-dictionary-bi.jpg)'
}
const descriptionLogin = {
  fontSize: 20,
  margin: 0
}
const SignIn = () => {

  const dispatch = useDispatch();
  const {loader, alertMessage, showMessage, authUser, success} = useSelector(({auth}) => auth);

  const history = useHistory();

  useEffect(() => {
    if (authUser !== null) {
      history.push('/');
    }
  });

  const onFinishFailed = errorInfo => {
  };

  const onFinish = values => {
    
    dispatch(authAction.loginUser(values));
  };

 
  return (
    <div className="gx-app-login-wrap" style={loginStyle}>
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content" style={{backgroundColor: '#038fde'}}>
            <div className="gx-app-logo-content-bg">

              {/* <img src={"https://mec.hueic.edu.vn/c%C3%A1c%20Kh%C3%B3a%20h%E1%BB%8Dc/native-english/"} alt='Neature'/> */}
            </div>
            <div className="gx-app-logo-wid">
              <h1 style={{fontSize: 30, color: '#ffe32d'}}>Toeic E-learing</h1>
              <p style={descriptionLogin} >Learn more, </p>
              <p style={descriptionLogin} >get results, go further</p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src="/assets/images/logo.png"/>
            </div>
          </div>
          <div className="gx-app-login-content">
            <Form
              initialValues={{remember: true}}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0">

              <Form.Item
                rules={[{required: true, message: 'The input is not valid E-mail!'}]} name="username">
                <Input placeholder="Username" autoComplete="false"  autoCorrect="false"  />
              </Form.Item>
              <Form.Item
                rules={[{required: true, message: 'Please input your Password!'}]} name="password">
                <Input type="password" placeholder="Password" autoComplete="new-password" autoCorrect="false"/>
              </Form.Item>
              <Form.Item>
                <Checkbox><IntlMessages id="appModule.iAccept"/></Checkbox>
                <span className="gx-signup-form-forgot gx-link"><IntlMessages
                  id="appModule.termAndCondition"/></span>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn"/>
                </Button>
                <span><IntlMessages id="app.userAuth.or"/></span> <Link to="/signup"><IntlMessages
                id="app.userAuth.signUp"/></Link>
              </Form.Item>
{/*               
              <span
                className="gx-text-light gx-fs-sm"> demo user email: 'demo@example.com' and password: 'demo#123'</span> */}
            </Form>
          </div>

          {loader ?
            <div className="gx-loader-view">
              <CircularProgress/>
            </div> : null}
          {showMessage ?
            message.error(alertMessage.toString()) : null}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
