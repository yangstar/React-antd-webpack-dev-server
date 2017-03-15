import { Message } from 'antd';
/**
 * 通用的获取数据函数
 * @type {{fetchAuthorBtn: (function(*=)), getChannelList: (function()), queryList: (function(*=, *=))}}
 */

const FetchMixin = {

  // 获取列表数据
  queryList (url, param) {
    let self = this;
    TOOLS.fetchData({
      url: url,
      data: param,
      callback: function (result) {
        if (result.code === 200) {
          let pager = result.page || {total: result.totalCount};
          return self.setState({
            data: result.data,
            pagination: pager || {},
          });
        } else {
          Message.error(result.msg);
        }
      }
    });
  },
};

export default FetchMixin;
