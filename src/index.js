import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'antd/dist/antd.css';
import TOOLS from './util/util';
import App from './moduleManage/index';
import Login from './login';

// 根路由
const routeConfig = {
  path: '/',
  component: 'div',
  indexRoute: { component: App },
  childRoutes: [
    {
      path: 'login.html', // 登录路由
      component: Login
    },
    {
      // onEnter: TOOLS.redirectToLogin(), // 路由拦截
      path: 'index.html', // 内容路由
      component: App
    }
  ]
};

ReactDOM.render(
  <Router history={ browserHistory } routes={ routeConfig }/>,
  document.getElementById('app')
);
