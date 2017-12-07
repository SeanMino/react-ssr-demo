import React, { Component, Children } from 'react';
import PropTypes from 'prop-types'
import HeadManager from "../../lib/head/manager";

export default class Container extends Component {
  static childContextTypes = {
    headManager: PropTypes.object,
  };

  getChildContext() {
    return {
      headManager: new HeadManager()
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      data: typeof window !== "undefined" ? window.INIT_STATE : {},
    };

    this.canRender = true;
  }

  componentDidMount() {
    this.scrollToHash()
  }

  componentDidUpdate() {
    this.scrollToHash()
  }

  componentWillReceiveProps(props) {
    if (props.location.pathname != this.props.location.pathname) {
      this.canRender = false;
      this.getRemote(props);
    }
  }

  shouldComponentUpdate() {
    return this.canRender
  }

  // 获取远程数据
  async getRemote(props) {
    let App = props.children.type; // 以最新的children的构造函数作为入口
    let data = await App.getInitialProps(props);
    this.canRender = true;
    this.setState({ data });
  }

  scrollToHash() {
    let hash = window.location.hash;
    if (!hash) return;
    hash = hash.split("#")[1];

    const el = document.getElementById(hash);
    if (!el) return;

    setTimeout(() => el.scrollIntoView(), 0)
  }

  render() {
    const { children } = this.props;
    const { data } = this.state;
    return React.cloneElement(children, { ...data })
  }
}