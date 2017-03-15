import React from 'react';
import { browserHistory } from 'react-router';
import { Form, Input, Checkbox, Button, Icon, Message} from 'antd';
import 'antd/dist/antd.css';
import './global/assets/css/login.css';
const FormItem = Form.Item;

let Login = React.createClass({

  getInitialState () {
    return {};
  },

  // 回车登录
  handleKeyEvent (event) {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  },

  handleSubmit () {
    let form = this.props.form.getFieldsValue();
    form.roleId = '1';
    TOOLS.fetchData({
      url: '/ajaxLoginProcess.htm',
      data: form,
      callback: function (result) {
        if (result.code === 200) {
          let params = result.data;
          let goPathUrl = '/index.html';
          // localStorage.userName = result.data.userName;
          // localStorage.userType = result.data.userType;
          // localStorage.phone = result.data.contactPhone;
          // localStorage.token = result.data.Token;
          // localStorage.channelId = result.data.channelId ? result.data.channelId : '';

          localStorage.userName = 'system';
          localStorage.userType = '1';
          localStorage.phone = '13456790117';
          localStorage.token = 'hfkhh44s4657uhgr5';
          localStorage.channelId = '';
          browserHistory.push({pathname: goPathUrl, state: {...params}});
        } else {
          Message.error(result.msg);
        }
      }
    });
  },

  render () {

    const { getFieldProps } = this.props.form;

    return (
      <div className="container">
        <div className="logo">
          <h1 className="logo-text">新城保理MS</h1>
        </div>
        <div className="main-content">
          <h2>账户登录</h2>
          <Form horizontal>
            <FormItem>
              <Icon type="user"/>
              <Input placeholder="请输入账户名"
                {...getFieldProps('username', {initialValue: 'system'})}
              />
            </FormItem>
            <FormItem>
              <Icon type="lock"/>
              <Input type="password" placeholder="请输入密码"
                     onKeyUp={this.handleKeyEvent}
                {...getFieldProps('password', {initialValue: '123456'})}
              />
            </FormItem>
            <FormItem>
              <Checkbox className="handle-check">记住我</Checkbox>
            </FormItem>
            <Button className="handle-submit" onClick={this.handleSubmit}>登录</Button>
          </Form>
        </div>
      </div>
    );
  }
});

Login = Form.create()(Login);
export default Login;
