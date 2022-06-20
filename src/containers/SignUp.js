import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignUp,
  userTwitterSignIn,
} from "../appRedux/actions";

import IntlMessages from "util/IntlMessages";
import { message } from "antd/lib/index";
import CircularProgress from "../components/CircularProgress";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import GithubOutlined from "@ant-design/icons/lib/icons/GithubOutlined";
import TwitterOutlined from "@ant-design/icons/lib/icons/TwitterOutlined";
import userAction from '../../src/appRedux/User/actions'
const FormItem = Form.Item;
const loginStyle = {
  backgroundImage:
    "url(https://mec.hueic.edu.vn/wp-content/uploads/2020/05/129453972-british-english-language-learning-class-vector-illustration-brittish-flag-logo-england-dictionary-bi.jpg)",
};
const descriptionLogin = {
  fontSize: 20,
  margin: 0,
};


const SignUp = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm()
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );
  
  const success = useSelector((state) => state.user.success)
  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push("/");
    }
  });

  const onFinishFailed = (errorInfo) => {};

  const onFinish = (values) => {
    // dispatch(showAuthLoader());
    // dispatch(userSignUp(values));
    console.log(values)

    dispatch(userAction.addUser({
      username: values.username,
      password: values.password
    }))
  };
  useEffect(() => {
    if(success) {
      form.resetFields()
      history.push("/signin")
    }
  }, [success])
  return (
    <div className="gx-app-login-wrap" style={loginStyle}>
      <div className="gx-app-login-container">
        <div className="gx-app-login-main-content">
          <div className="gx-app-logo-content" style={{backgroundColor: '#038fde'}}>
            <div className="gx-app-logo-content-bg">
              {/* <img src={"https://via.placeholder.com/272x395"} alt="Neature" /> */}
            </div>
            <div className="gx-app-logo-wid">
              <h1 style={{fontSize: 30, color: '#ffe32d'}}>
                <IntlMessages id="app.userAuth.signUp" />
              </h1>
              <p style={descriptionLogin} >Learn more, </p>
              <p style={descriptionLogin} >get results, go further</p>
            </div>
            <div className="gx-app-logo">
              <img alt="example" src="/assets/images/logo.png" />
            </div>
          </div>

          <div className="gx-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="gx-signin-form gx-form-row0"
            >
              <Form.Item name="username"  
                    rules={[{ required: true },
                            {pattern: /^\S*$/, 
                            message: <IntlMessages id="regex.notAllowSpace" />}]}>
                    <Input placeholder="Username"  autoComplete='off' autoCorrect='true' />
                </Form.Item>

                <Form.Item name="password" hasFeedback rules={[ { required: true } ]}>
                    <Input.Password placeholder="Password"  autoComplete='new-password' />
                </Form.Item> 
                <Form.Item 
                    name="rePassword" 
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                          required: true,
                          message: <IntlMessages id="regex.confirmPassword" />,
                        },
                        ({ getFieldValue }) => ({
                          validator(rule, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(<IntlMessages id="regex.confirmPassword" />);
                          },
                        }),
                      ]}>
                    <Input.Password placeholder="Confirm password" />
                </Form.Item>
              {/* <FormItem name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link
                  className="gx-login-form-forgot"
                  to="/custom-views/user-auth/forgot-password"
                >
                  Forgot password
                </Link>
              </FormItem> */}
              <FormItem>
                <Button type="primary" className="gx-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />
                </span>{" "}
                <Link to="/signin">
                  <IntlMessages id="app.userAuth.signIn" />
                </Link>
              </FormItem>
            </Form>
          </div>
          {loader && (
            <div className="gx-loader-view">
              <CircularProgress />
            </div>
          )}
          {showMessage && message.error(alertMessage)}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
