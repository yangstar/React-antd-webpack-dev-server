/**
 * 包含一些页面的基础应用函数 mixin
 * @type {{componentDidMount: (function()), handleTableChange: (function(*)), handleSearch: (function()), handleCancel: (function()), tableStatusChange: (function()), rowClassName: (function(*, *))}}
 */
const CommonMixin = {

  componentDidMount () {
    this.handleSearch();
  },

  // 分页
  handleTableChange (pagination) {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.fetch();
  },

  // 查询
  handleSearch () {
    this.setState({
      visible: false,
      pagination: {
        current: 1
      }
    });
    this.fetch();
  },


  // 关闭按钮
  handleCancel () {
    this.setState({
      visible: false,
      record: {},
    });
  },

  // 弹窗操作回调
  tableStatusChange () {
    this.handleSearch();
    this.handleCancel();
  },


  // 重置表单
  handleReset () {
    this.props.form.resetFields();
    this.setState({
      startValue: null,
      endValue: null,
    });
  },

};

export default CommonMixin;
